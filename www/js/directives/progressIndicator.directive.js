
function countdownTimer(){

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      attrs.$observe('totalAnswered', function(value){
        console.log(value);
        console.log(element);
        document.querySelector('.nav-bar-container.bar-royal');
      })
    }
  }
}

angular.module('quizzter').directive('quizProgressIndicator', countdownTimer);
