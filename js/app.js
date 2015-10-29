var app = angular.module('app', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    when('/what', {
      templateUrl: 'partials/what.html',
      controller: 'WhatController'
    }).
    when('/what/quiz', {
      templateUrl: 'partials/quiz/what.html',
      controller: 'WhatQuizController'
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
  }
]);

