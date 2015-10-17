var app = angular.module('app', ['ngRoute', 'appControllers']);
var appControllers = angular.module('appControllers', []);

app.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html',
      controller: 'HomeController'
    }).
    otherwise({
      redirectTo: '/'
    });
  }
]);

