var app = angular.module('app', ['rx']);
app.controller('Ctrl', function Ctrl($scope, $http, DsPoller){

  var poller = new DsPoller('cases');

  poller.setConfig({
    interval: 3000
  });

  poller.setAction(function () { return $http.get('http://localhost:8888/cases')});

  poller.subscribe(function(res) {
    $scope.$apply(function(){
      $scope.items = res.data;
    });
  });
  
  poller.start();

});

app.provider('DsPoller', function() {
  
  return {
    _pollers: [],
    $get: function(rx) {
      var DsPoller, pollers;
      pollers = this._pollers;
      
      return DsPoller = (function () {

        function DsPoller (group, config) {
          this.group = group;
          pollers[group] = this;       
          this.action = function(){}
          this.handler = function(){}
          this.errorCount$ = new rx.BehaviorSubject(0)
          this.interval$ = new rx.BehaviorSubject(0);
          this.maxInterval$ = new rx.BehaviorSubject(0);
                   
          this.computedInterval$ = this.interval$
            .zip(this.errorCount$, this.maxInterval$, function(interval, errorCnt, maxInt){
              var calcInt = interval * Math.pow(2, errorCnt);
              return Math.min(calcInt, maxInt);
            });
          
          var _this = this;
          this.poller$ = rx.Observable.fromPromise(function(){ return _this.action(); })
            .repeatWhen(function(notification){
              return notification
                .do(function(){ return _this.errorCount$.onNext(0); })
                .flatMap(function(){ return _this.computedInterval$; })
                .flatMap(function(interval){ return rx.Observable.timer(interval); });
            })
            .retryWhen(function(errors){
              return errors
                .do(function(err) { return _this.errorCount$.onNext(_this.errorCount$.getValue() + 1); })
                .flatMap(function() { return _this.computedInterval$; })
                .flatMap(function(interval) { return rx.Observable.timer(interval); });
            })
            .publish();

            this.setConfig(config); 
        }
      
        DsPoller.prototype.setConfig = function(config) {
          this.interval$.onNext(config && config.interval || this.interval$.getValue() || 5000);
          this.maxInterval$.onNext(config && config.maxInterval || this.maxInterval$.getValue() || 300000);
        }
        
        DsPoller.prototype.setAction = function(action) {
          this.action = action;
        }
        
        DsPoller.prototype.subscribe = function(cb) {
          this.poller$.subscribe(cb);
        }
        
        DsPoller.prototype.start = function(forceStart) {
          var _this = this;
          rx.Observable.timer(forceStart ? 0 : this.interval$.getValue()).subscribe(function(){
            _this.connection = _this.poller$.connect();
          });
        }
        
        DsPoller.prototype.stop = function() {
          this.connection.dispose();
        }
        
        DsPoller.prototype.destroy = function() {
          this.stop();
          delete pollers[this.group];
        }
        
        DsPoller.get = function(group) {
          return pollers[group];
        }
        
      
        return DsPoller;
      })();   
    }
  };

});