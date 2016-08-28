var keyboardLayouts=angular.module('keyboardLayouts',['ngRoute']);

keyboardLayouts.config(function($routeProvider){
    console.log("config.route");
    $routeProvider
        .when('/',{
        templateUrl:'pages/home.html',
        controller:'homeController'
    })
     .when('/about',{
        templateUrl:'pages/about.html',
        controller:'aboutController'
    })
});

keyboardLayouts.directive('keyboardLayoutItem',function(){
    return {
        restrict:'E',
        templateUrl:'directives/keyboardLayoutItem.html',
        replace:true
        
    }
});

keyboardLayouts.controller('homeController',['$scope','$http',function($scope,$http){
     console.log("home controller");

    $http.get('data/data.json')
    .success(function(data, status, headers){
    console.log(" status:"+status);
        //console.log(data);
        $scope.data=data;
    })
    .error(function(data, status, headers, config){
        console.log("Error Data:"+data);
    console.log("Error status:"+status);
        console.log("Error headers:"+headers);
    })
}]);

keyboardLayouts.controller('aboutController',['$scope','$http',function($scope,$http){
    console.log("about controller");
}]);