var app = angular.module('app', ['rx']);
app.controller('Ctrl', function Ctrl($scope, $http, DsPoller){

  var poller = new DsPoller('cases');

  poller.setConfig({
    interval: 2000
  });

  poller.setAction(function () { return $http.get('http://localhost:8888/cases')});

  poller.setHandler(function(res) {
    $scope.$apply(function(){
      $scope.items = res;
    });
  });
  
  //poller.start();
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
          
          this.action$ = function(){}
          this.handler$ = function(){}
          
          var _this = this;

          function computeInterval(error) {
            if (error) {
              _this.interval$ = _this.interval$ < _this.maxInterval$ ? _this.interval$ * 2 : _this.maxInterval$;
            } else {
              _this.interval$ = _this.initInterval$;
            }
            return _this.interval$;
          }
          
          function executeAction() {
            return rx.Observable.fromPromise(_this.action$());
          }
          
          this.poller$ = rx.Observable.create(function(observer) {
          
              var nextPoll = function(obs) {
                executeAction()
                  .subscribe(function(d) {         
                      observer.onNext(d.data);
                      if (_this.running$) {
                        rx.Observable.timer(computeInterval()).do(function(){ nextPoll(obs); }).subscribe();
                      }
                  }, function(e) {
                    if (_this.running$) {
                      rx.Observable.timer(computeInterval(true)).do(function(){ nextPoll(obs); }).subscribe();
                    }
                  });
              };

              rx.Observable.timer(_this.delay$).do(function(){ nextPoll(observer); }).subscribe();
          }).publish();

        }
      
        DsPoller.prototype.setConfig = function(config) {
          this.interval$ = this.initInterval$ = config && config.interval || 5000;
          this.maxInterval$ = config && config.maxInterval || 300000;
        }
        
        DsPoller.prototype.setAction = function(action) {
          this.action$ = action;
        }

        DsPoller.prototype.setHandler = function(handler) {
          this.handler$ = handler;
        }
        
        DsPoller.prototype.start = function(immediate) {
          if (immediate) { 
            this.delay$ = 0; 
          } else {
            this.delay$ = this.interval$;
          }
          this.connection$ = this.poller$.connect();
          this.unsubscribe$ = this.poller$.subscribe(this.handler$);
          this.running$ = true;
        }
        
        DsPoller.prototype.stop = function() {
          this.connection$.dispose();
          this.unsubscribe$.dispose();
          this.running$ = false;
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