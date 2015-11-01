app.controller('WhatController', ['$scope',
  function ($scope) {
    // TODO: Code
  }
]);

app.controller('WhatQuizController', ['$scope', '$rootScope',
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

      if ($scope.answers.correct === 3 && $rootScope.level === 0) {
        $rootScope.level = 1;
      }
    };

    /*
     * Initialisation
     */

    $scope.initialise = function() {
      $scope.answers = {
        purpose: {
          selected: randomAnswer(),
          answer:   '1',
          reason:   [
            '',
            'That\'s not quite right. Tax File Numbers identify people, not forms.',
            'That\'s not quite right. Tax File Numbers identify people, not invoices.'
          ],
          correct:  false
        },
        circumstance: {
          selected: randomAnswer(),
          answer:   '2',
          reason:   [
            'That\'s incorrect. A Tax File Number is permanent for an individual.',
            '',
            'That\'s incorrect. A Tax File Number is permanent for an individual.'
          ],
          correct:  false
        },
        uses: {
          selected: randomAnswer(),
          answer:   '3',
          reason:   [
            'That\'s right, but there\'s more than just one use for the Tax File Number...',
            'That\'s right, but there\'s more than just one use for the Tax File Number...',
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
