app.controller('WhyController', ['$scope',
  function ($scope) {
    // TODO: Code
  }
]);

app.controller('WhatQuizController', ['$scope',
  function ($scope) {
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
    };

    /*
     * Initialisation
     */

    $scope.initialise = function() {
      $scope.answers = {
        when: {
          selected: randomAnswer(),
          answer:   '3',
          reason:   [
            'That\'s wrong because...',
            'That\'s wrong because...',
            ''
          ],
          correct:  false
        },
        renew: {
          selected: randomAnswer(),
          answer:   '2',
          reason:   [
            'That\'s wrong because...',
            '',
            'That\'s wrong because...'
          ],
          correct:  false
        },
        employee: {
          selected: randomAnswer(),
          answer:   '1',
          reason:   [
            '',
            'That\'s wrong because...',
            'That\'s wrong because...'
          ],
          correct:  false
        },
        super: {
          selected: randomAnswer(),
          answer:   '2',
          reason:   [
            'That\'s wrong because...',
            '',
            'That\'s wrong because...'
          ],
          correct:  false
        },
        centrelink: {
          selected: randomAnswer(),
          answer:   '2',
          reason:   [
            'That\'s wrong because...',
            '',
            'That\'s wrong because...'
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
