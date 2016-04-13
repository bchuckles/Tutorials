'use strict';

angular.module('myApp.view1', ['ngRoute','ngStorage'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$localStorage', function($scope,$localStorage) {
    this.message = "hello",
    $scope.time = "loading......";
    var info;
    $scope.$storage = $localStorage.$default({
        x: 42
    });

    $scope.save = function(name, address, phone) {
        var contact = {};
        contact.name = name;
        contact.address = address;
        contact.phone = phone;
        if(info === undefined && $localStorage.message.length < 1 ){
            info = [];
        }else if($localStorage.message.length > 0){
            info = $localStorage.message;
        }

        info.push(contact);
        $localStorage.message = info;
    };

    $scope.list = function() {
        $scope.data = $localStorage.message;
    };
}])
