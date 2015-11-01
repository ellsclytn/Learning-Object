app.controller('HomeController', ['$scope', '$rootScope',
  function ($scope, $rootScope) {
    if (!$rootScope.level) {
      $rootScope.level = 0;
    }
    $scope.progress = $rootScope.level;
  }
]);

