var app            = angular.module('app', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller:  'HomeController'
    }).
    when('/what', {
      templateUrl: 'partials/what.html',
      controller:  'WhatController'
    }).
    when('/what/quiz', {
      templateUrl: 'partials/quiz/what.html',
      controller:  'WhatQuizController'
    }).
    when('/why', {
      templateUrl: 'partials/why.html',
      controller:  'WhyController'
    }).
    when('/why/quiz', {
      templateUrl: 'partials/quiz/why.html',
      controller:  'WhatQuizController'
    }).
    when('/how', {
      templateUrl: 'partials/how.html',
      controller:  'HowController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);

/*
 * Helpers
 */

// Select a random answer
function randomAnswer() {
  return String(Math.floor(Math.random() * 3 + 1));
}
