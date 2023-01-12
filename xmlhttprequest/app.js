var myApp = angular.module('myApp',['ngRoute']);

// window.addEventListener('hashchange', function(){

    
//     if(window.location.hash=== '#/bookmark/1'){
//         console.log('Page 1 is cool!');
//     }
//     if(window.location.hash=== '#/bookmark/2'){
//         console.log('Let me go get Page 2.');
//     }
//     if(window.location.hash=== '#/bookmark/3'){
//         console.log('Here\'s Page 3.');
//     }
// });

myApp.config(function($routeProvider) {

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

    .when('/third', {

        templateUrl: 'pages/third.html',
        controller: 'thirdController'

    })

    .when('/fourth', {

        templateUrl: 'pages/fourth.html',
        controller: 'fourthController'

    })

});

myApp.service('nameService', function(){

    var self = this;
    this.name = 'John Doe';

    this.namelength = function(){
        return self.name.length;
    };

});

myApp.controller('mainController', ['$scope','$log','nameService',function($scope,$log,nameService){


$scope.name = nameService.name;

$scope.$watch('name', function(){
    nameService.name = $scope.name;
});

$log.main = 'Property from main ';
$log.log(nameService.name);
$log.log(nameService.namelength());


$log.log($log);

    
}]);

myApp.controller('secondController', ['$scope','$log','$routeParams','nameService',function($scope,$log,$routeParams,nameService){

    $scope.name = 'Second';
    $scope.num = $routeParams.num || 1;

    $log.second = 'Property from second';
    $log.log($log);

    $scope.name = nameService.name;

    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    
   
}]);

myApp.controller('thirdController', ['$scope','$log','$routeParams','$filter',function($scope,$log,$routeParams,$filter){

    $scope.name = 'Third';
    $scope.handle ='';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    };
    
   
}]);

myApp.controller('fourthController', ['$scope','$log','$routeParams',function($scope,$log,$routeParams){

    $scope.name = 'Fourth';
   
}]);
