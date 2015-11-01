app.controller('HowController', ['$scope',
  function ($scope) {
    // TODO: Code
  }
]);

app.controller('HowQuizController', ['$scope', '$rootScope',
  function ($scope, $rootScope) {
    $scope.checkAnswers = function() {
      $scope.answers.submitted = true;
      $scope.answers.correct   = 0;
      for (var question in $scope.answers) {
        if ($scope.answers.hasOwnProperty(question) && typeof($scope.answers[question]) === 'object' && $scope.answers[question] !== null) {
          if ($scope.answers[question].selected === $scope.answers[question].answer) {
            $scope.answers[question].correct = true;
            $scope.answers.correct++;
          } else {
            $scope.answers[question].correct = false;
          }
        }
      }

      if ($scope.answers.correct === 1 && $rootScope.level === 2) {
        $rootScope.level = 3;
      }
    };

    /*
     * Initialisation
     */

    $scope.initialise = function() {
      $scope.answers = {
        applying: {
          selected: randomAnswer(),
          answer:   '3',
          reason:   [
            'That\'s wrong because...',
            'That\'s wrong because...',
            ''
          ],
          correct:  false
        },
        submitted: false,
        correct:   0
      };
    }

    $scope.initialise();
  }
]);


