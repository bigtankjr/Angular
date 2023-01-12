var Person = function(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname;
}

var things = [1,'2',function(){alert('Hello world!');}];

// things[2]();
var john = new Person('John','Doe');

function logPerson(person)
{
    
    console.log(person.firstname);
}

logPerson(john);

// var tb = document.getElementById("name");

// tb.addEventListener("keypress",
// function(event){
//     console.log("Pressed");
// });

var myApp = angular.module('myApp',['ngMessages','ngResource']);

myApp.controller('mainController', ['$scope','$log','$filter','$resource','$timeout',function($scope, $log, $filter, $resource,$timeout){

    $scope.handle = '';

    $scope.lowercasehandle = function(){
        
        return $filter('lowercase')($scope.handle);
    }

    $scope.characters = 5;
    $scope.rules =[
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool"}
    ];

    console.log($scope.rules);

    $scope.$watch('handle', function(newValue, oldValue){
        
        console.info('Changed!');
        console.log('Old: ' + oldValue);
        console.log('New: ' + newValue);


    });

    $scope.alertClick = function(){ 
        alert("Clicked!");
    }
   
    // $timeout(function(){
        
    //         $scope.handle = 'newtwitterhandle';
    //         console.log('Scope changed!');

    // }, 3000);

    // $scope.name = 'John';

    // $timeout(function(){

    //     $scope.name = 'Everybody';

    // }, 3000);
    // $scope.formattedname = $filter('uppercase')($scope.name);

    // $log.info($scope.name);
    // $log.info($scope.formattedname);

    // $log.log("Hello");
    // $log.log("This is some information");
    // $log.log("Warning!");
    // $log.log("Some debug information while writing my code.");
    // $log.log("This was an error!!!");

    // console.log($resource);
    
}]);

var searchPeople = function($scope,firstName, lastName, height, age, occupation)
{
    return 'Jane Doe';

}
 console.log(angular.injector().annotate(searchPeople));