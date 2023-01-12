var myApp = angular.module('myApp', ['ngRoute','ngResource']);

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
    
});

myApp.service('nameService',function(){

    var self = this;
    this.name = 'John Doe';
    this.name.length = function(){
        return self.name.length();
    }
});

myApp.directive('searchResult',function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html',
        replace: true,
        scope: {
            
        }
    }
});

myApp.controller('mainController', ['$scope', '$log', 'nameService','$filter',function($scope, $log,nameService,$filter) {
    
    $scope.name = 'Main';
    $scope.user = nameService.name;
    $scope.person = {
        name:'John Doe',
        address: '555 Main St., New York, NY 11111'
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log','nameService','$filter', function($scope, $log,nameService,$filter) {
    
    $scope.name = 'Second';
    $scope.user = nameService.name;

    $scope.lowercaseuser = function(){
        
        return $filter('lowercase')($scope.user);
    };
    
}]);
