var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){

    $routeProvider
    .when('/' , {
        templateUrl:'pages/main.html',
        controller: 'mainController'
    })

    .when('/second' ,{
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
});



myApp.controller('mainController',['$scope','$log','$routeParams', function($scope, $logs,$routeParams){

  

}]);

myApp.controller('secondController',['$scope','$log','$routeParams', function($scope, $logs,$routeParams){

    
}]);

myApp.directive('searchResult', function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/searchresult.html', 
        replace: true
    }
});

myApp.directive('panelResult',function(){
    return {
        restrict: 'AECM',
        templateUrl: 'directives/panelresult.html',
        replace: true
    }
});