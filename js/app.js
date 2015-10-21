var app = angular.module('app', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/what', {
      templateUrl: 'partials/what.html',
      controller: 'WhatController'
    }).
    when('/why', {
      templateUrl: 'partials/why.html',
      controller: 'WhyController'
    }).
    when('/how', {
      templateUrl: 'partials/how.html',
      controller: 'HowController'
    }).
    otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  }
]);

