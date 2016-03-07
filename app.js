var app = angular.module('app', ['rx']);
app.controller('Ctrl', function Ctrl($scope, $http, rx){
  var fetch = 0;
  
  $scope.time = new Date();
  
  function DsPoller (action, config) {
    var delay, interval, initInterval;
    delay = config && config.delay || 0;
    initInterval = interval = config && config.interval || 5000;
    
    this.poller$ = rx.Observable.create(function (observer) {
      var nextPoll=function(obs) {
        rx.Observable.timer(interval).subscribe(function(){
          rx.Observable.fromPromise(action())
            .map(function (x){ return x.data; })
            .subscribe(function(d) {
                obs.onNext(d);
                nextPoll(obs);
                interval = initInterval;
            }, function(e) {
              nextPoll(obs);
              interval = interval * 2;
            });
        });
      };        
      
      
      nextPoll(observer);
    
    });

  }
  DsPoller.prototype.setPeriod = function(time) {
    this.period$.onNext(time);
  }
  
  
  var poller = new DsPoller(function () {return $http.get('http://localhost:3333/cases')});
  
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