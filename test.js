var app = angular.module('app', ['rx']);
app.controller('Ctrl', function Ctrl($scope, $http, rx){
  var fetch = 0;
  
  
  rx.Observable.interval(1000)
    .take(10)
    .flatMap(function(){
      var subject = new rx.Subject();
      subject.onNext($http.get('http://localhost:3333/cases'));
      return subject;
    }).subscribe(function(items) {
      console.log('fetch #', ++fetch);
      $scope.$apply(function(){
        $scope.items = items;        
      });
    });
    
});