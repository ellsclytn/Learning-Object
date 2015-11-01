app.controller('WhyController', ['$scope',
  function ($scope) {
    // TODO: Code
  }
]);

app.controller('WhyQuizController', ['$scope', '$rootScope',
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

      if ($scope.answers.correct === 5 && $rootScope.level === 1) {
        $rootScope.level = 2;
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
            'Not quite. There is no age restriction on getting a Tax File Number.',
            'While you may have more tax withheld without a Tax File Number, there is no requirement to have a one with a job.',
            ''
          ],
          correct:  false
        },
        renew: {
          selected: randomAnswer(),
          answer:   '2',
          reason:   [
            'Tax File Numbers do not have an expiry date.',
            '',
            'Your Tax File Number sticks with you for life, so you won\'t need a new one at a new job.'
          ],
          correct:  false
        },
        employee: {
          selected: randomAnswer(),
          answer:   '1',
          reason:   [
            '',
            'Close. Having a Tax File Number doesn\'t necessarily mean you won\'t get income taxed, but it will reduce it.',
            'Having or not having a Tax File Number has no effect on what jobs you\'re allowed to perform.'
          ],
          correct:  false
        },
        super: {
          selected: randomAnswer(),
          answer:   '2',
          reason:   [
            'A Tax File Number can be joined to a super fund, but it doesn\'t make one for you.',
            '',
            'Employer super contributions are set by the government. Your employer can contribute more if they wish, but having a Tax File Number won\'t change the government specified rate of contribution.'
          ],
          correct:  false
        },
        centrelink: {
          selected: randomAnswer(),
          answer:   '2',
          reason:   [
            'Centrelink benefits are given on the basis that you have a Tax File Number, and so the contribution amount doesn\'t depend on whether you have one or not.',
            '',
            'Centrelink assistance isn\'t taxed like income tax (it\'s not income), so a Tax File Number won\'t change that.'
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
