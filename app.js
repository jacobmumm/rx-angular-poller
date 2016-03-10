var app = angular.module('app', ['rx']);
app.controller('Ctrl', function Ctrl($scope, $http, DsPoller){

  var poller = new DsPoller('cases');

  poller.setConfig({
    interval: 3000
  });

  poller.setAction(function () { return $http.get('http://localhost:8888/cases')});

  poller.setHandler(function(res) {
    $scope.$apply(function(){
      $scope.items = res;
    });
  });
  
  poller.start();
  window.poller = poller;
  /*setTimeout(function(){
    // not really working yet
    poller.stop();
  }, 20000);*/

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

         
          this.setConfig(config);
          
          this.action = function(){}
          this.handler = function(){}
          
          var _this = this;

          function computeInterval(error) {
            if (error) {
              _this.interval = _this.interval < _this.maxInterval ? _this.interval * 2 : _this.maxInterval;
            } else {
              _this.interval = _this.initinterval;
            }
            return _this.interval;
          }
          
          this.poller$ = rx.Observable.fromPromise(function(){ return _this.action(); })
            .retryWhen(function(errors){
              return errors.scan(function(acc, x) { return acc + x; }, 0)
                .flatMap(function(x){ 
                  return rx.Observable.timer(computeInterval(true));
                });
            })
            .repeatWhen(function(notification){
              return notification
                .scan(function(acc, x) { return acc + x; }, 0)
                .flatMap(function(x){ 
                  return rx.Observable.timer(computeInterval());
                });
            });
        }
      
        DsPoller.prototype.setConfig = function(config) {
          this.setInterval(config && config.interval || 5000);
          this.maxInterval = config && config.maxInterval || 300000;
        }
        
        DsPoller.prototype.setInterval = function(int) {
          this.interval = this.initinterval = int;
        }
        
        DsPoller.prototype.setAction = function(action) {
          this.action = action;
        }

        DsPoller.prototype.setHandler = function(handler) {
          this.handler = handler;
        }
        
        DsPoller.prototype.start = function(forceStart) {
          var _this = this;
          rx.Observable.timer(forceStart ? 0 : this.interval).subscribe(function(){
            _this.unsubscribe$ = _this.poller$.subscribe(this.handler);
          });
        }
        
        DsPoller.prototype.stop = function() {
          this.unsubscribe$.dispose();
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