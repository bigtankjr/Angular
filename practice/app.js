var myApp = angular.module('myApp',['ngRoute']);

myApp.service('nameService',function(){
    var self = this;
    this.name = 'John Doe';
    this.namelength = function(){

        return self.name.length;
    }
});

myApp.config(function($routeProvider){

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



myApp.controller('mainController',['$scope','$log','nameService',function($scope, $log, nameService){


    $scope.name = nameService.name;
    $scope.namelength = nameService.namelength();

}]);

myApp.controller('secondController',['$scope','$log','nameService',function($scope, $log, nameService){


    $scope.name = nameService.name;
    $scope.namelength = nameService.namelength();
    
}]);