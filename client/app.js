var myApp = angular.module('myApp', ['ngRoute']);

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

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {

    $scope.name = 'Main';

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
