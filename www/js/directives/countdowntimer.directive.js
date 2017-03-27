function formatNumber(number) {
  if(number < 10){
    return '0' + number;
  }
  return number;
}

function countdownTimer($interval){

  return {
    restrict: 'E',
    replace: true,
    template: "<div class='timer'><strong><span id='minute'></span>:<span id='second'></span></strong></div>",
    link: function(scope, element, attrs){

      var intervalFunction = $interval(function(){
        seconds = parseInt(seconds) + 1;

        if(seconds === 60){
          minutes = parseInt(minutes) + 1;
          document.getElementById('minute').innerText = formatNumber(minutes);
          seconds = 0;
        }

        document.getElementById('second').innerText = formatNumber(seconds);
        }, 1000);

      var seconds = '0';
      var minutes = '0';

      document.getElementById('minute').innerText = formatNumber(minutes);
      document.getElementById('second').innerText = formatNumber(seconds);

      attrs.$observe('startTimer', function(value){
        scope.startTimer = scope.$eval(value);
        if(value){
          intervalFunction;
        }
      });

      scope.$on('$destroy', function () {
        $interval.cancel(intervalFunction);
      });
    }
  }
}

angular.module('quizzter').directive('countdownTimer', countdownTimer);
