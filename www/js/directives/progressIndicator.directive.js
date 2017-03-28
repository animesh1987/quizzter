
function countdownTimer(){

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var transformValue = -100;
      var newDiv = document.createElement('div');
      newDiv.id = 'progress-indicator';
      var activeNavContainer = document.querySelector('.nav-bar-container.bar-royal .nav-bar-block[nav-bar="cached"]');
      var activeNav = document.querySelector('.nav-bar-container.bar-royal .nav-bar-block[nav-bar="cached"] .bar-header');
      newDiv.style.height = activeNav.clientHeight + 'px';
      newDiv.style.background = '#33cd5f';
      newDiv.style.transition = 'all 0.5s ease';
      newDiv.style.webkitTransform = 'translate3d('+ transformValue + '%, 0, 0)';
      activeNavContainer.appendChild(newDiv);

      attrs.$observe('totalProgress', function(value){
        transformValue = -100 + value * 100;
        newDiv.style.webkitTransform = 'translate3d('+ transformValue + '%, 0, 0)';
      });

      scope.$on('$destroy', function () {
        document.getElementById('progress-indicator').remove();
      });
    }
  }
}

angular.module('quizzter').directive('quizProgressIndicator', countdownTimer);
