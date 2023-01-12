var myApp = angular.module('myApp',['ngResource']);

myApp.controller('mainController',['$scope','$filter',function($scope, $filter){

    $scope.handle = '';
    $scope.myHandle = 'benlevels';
    $scope.characters = 5;

    $scope.lowercasehandle = function(){

        return $filter('lowercase')($scope.handle);
    };

}]);