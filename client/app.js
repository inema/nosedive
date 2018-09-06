var myApp = angular.module('myApp', ['ngRoute']);
var myUrl = 'http://127.0.0.1:8000/'
myApp.config(function ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })

    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })

});

myApp.controller('mainController', ['$scope', '$log', '$http', function($scope, $log, $http) {

  var getPersonUrl = myUrl + 'get_person/1'
  $http({
      method : "GET",
      url : getPersonUrl
  }).then(function mySuccess(response) {
      console.log(response)
      $scope.name = response.data[0]['first_name'] + ' ' + response.data[0]['last_name']
      $scope.rating = Number.parseFloat(response.data[0]['rating']).toFixed(1)
      $scope.ratingFloat = Math.round((response.data[0]['rating']-$scope.rating) * 1000.)
  }, function myError(response) {
      console.log(response)
  });
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {

    $scope.num = $routeParams.num || 1;

}]);

myApp.directive("sideBarEvent", function(){
    return {
      templateUrl: 'directives/sideBarEvent.html',
      replace: true
    }
});

myApp.directive("mainPost", function(){
    return {
      templateUrl: 'directives/mainPost.html',
      replace: true
    }
});

myApp.directive("feedStatus", function(){
    return {
      templateUrl: 'directives/feedStatus.html'
    }
});
