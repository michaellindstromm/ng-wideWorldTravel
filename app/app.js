'use strict';

var app = angular.module("WideWorldTravel", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/views/guides.html',
        controller: "BookController"
    })
    .otherwise('/');
});