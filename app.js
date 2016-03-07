var app = angular.module('app', ['rx']);
app.controller('Ctrl', function Ctrl($scope, $http, rx){
  var fetch = 0;
  
  $scope.time = new Date();
  
  function DsPoller (action, config) {
    var delay, interval, initInterval, maxInterval;
    delay = config && config.delay || 0;
    initInterval = interval = config && config.interval || 5000;
    maxInterval = config && config.maxInterval || 300000; //5min
    
    this.poller$ = rx.Observable.create(function(observer) {
        var nextPoll = function(obs) {
          rx.Observable.fromPromise(action())
            .map(function (x){ return x.data; })
            .subscribe(function(d) {       
                // pass promise up to parent observable  
                observer.onNext(d);
                
                // reset interval in case previous call was an error
                interval = initInterval;   
                setTimeout(function(){nextPoll(obs);}, interval);
            }, function(e) {
              // push interval higher (exponential backoff)
              interval = interval < maxInterval ? interval * 2 : maxInterval;
              setTimeout(function(){nextPoll(obs);}, interval);

            });
        };
        nextPoll(observer);
    }); 

  }
  DsPoller.prototype.setPeriod = function(time) {
    this.period$.onNext(time);
  }
  
  
  var poller = new DsPoller(function () {return $http.get('http://localhost:3333/cases')});
  
  
  //poller.poller$.subscribe(function(){});
  poller.poller$.subscribe(function (items) {
    console.log('fetch #', ++fetch, items);
    $scope.$apply(function(){
      $scope.items = items;        
    });
  }, function (err) {
    console.log('subscribe error', err);
  });
  
  // rx.Observable.interval(1000)
  //   .take(10)
  //   .flatMap(function(){
  //     var subject = new rx.Subject();
  //     subject.onNext($http.get('http://localhost:3333/cases'));
  //     return subject;
  //   }).subscribe(function(items) {
  //     console.log('fetch #', ++fetch);
  //     debugger
      
  //     $scope.$apply(function(){
  //       $scope.items = items;        
  //     });
  //   }, function (err) {
  //     debugger
  //   }, function (err) {
  //     debugger
  //   });
    
});