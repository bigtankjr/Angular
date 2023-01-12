var myApp = angular.module('myApp',['ngResource']);

myApp.controller('mainController',['$scope',function($scope){

    $scope.counter = 0;
    console.log($scope.counter);
    $scope.countFunction = function(){
      $scope.counter++;
    
  };
  
  

  $scope.startOver = function(){
    if($scope.counter >0)
        $scope.counter--;
  };
}]);