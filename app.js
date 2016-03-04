var app = angular.module('app', ['rx']);
app.controller('Ctrl', function Ctrl($scope, $http, rx){
  var fetch = 0;
  
  $scope.time = new Date();
  
  function DsPoller (action, period) {
    period = period || 5000;
    
    this.period$ = new rx.Subject();
    
    this.interval$ = this.period$.startWith(period)
      .flatMapLatest(function (t) {return rx.Observable.timer(0, t)});
      
    this.poller$ = this.interval$.flatMapLatest(function () {
      return rx.Observable.fromPromise(action())
        .catch(function (err) {
          return rx.Observable.empty();
        });
    });
    
  }
  DsPoller.prototype.setPeriod = function(time) {
    this.period$.onNext(time);
  }
  
  
  var poller = new DsPoller(function () {return $http.get('http://localhost:3333/cases')});
  
  poller.poller$.subscribe(function (items) {
    console.log('fetch #', ++fetch, items);
    $scope.$apply(function(){
      $scope.items = items.data;        
    });
  }, function (err) {
    debugger
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