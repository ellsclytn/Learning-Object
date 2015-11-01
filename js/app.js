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
      controller:  'WhyQuizController'
    }).
    when('/how', {
      templateUrl: 'partials/how.html',
      controller:  'HowController'
    }).
    when('/how/quiz', {
      templateUrl: 'partials/quiz/how.html',
      controller:  'HowQuizController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);

var level = 0;

/*
 * Helpers
 */

// Select a random answer
function randomAnswer() {
  return String(Math.floor(Math.random() * 3 + 1));
}
