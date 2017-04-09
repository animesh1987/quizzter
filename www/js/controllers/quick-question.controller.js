var controller = function($scope, $state, questions, $ionicModal, resultFactory, $timeout){

  var vm = this;

  vm.show = false;

  if(!!$state.params && !!$state.params.questions){
    vm.questions = $state.params.questions
  }

  vm.data = questions;

  if(vm.data && vm.data.length > 0){
    _.each(vm.data, function(question){
      question.answered = {answered: false, optionSelected: null, isCorrect: null}
    })
  }
  vm.selectedAnswer = null;
  vm.totalAnswered = 0;
  vm.correctAnswer = null;
  vm.currentQuestion = 0;
  vm.startTimer = true;
  vm.stopTimer = false;

  console.log(vm.data)

  _.extend(vm, {
    nextQuestion: function(){
      vm.currentQuestion = vm.currentQuestion + 1;
      vm.correctAnswer = null;
      vm.selectedAnswer = null;
    },
    previousQuestion: function(){
      vm.currentQuestion = vm.currentQuestion - 1;
      if(vm.data[vm.currentQuestion].answered.answered){
        vm.correctAnswer = vm.data[vm.currentQuestion].answered.isCorrect;
        vm.selectedAnswer = vm.data[vm.currentQuestion].answered.optionSelected;
        return;
      }
      vm.selectedAnswer = null;
    },
    selectAnswer: function(data, selection){
      console.log(data);
      if(data.answered && data.answered.answered){
        console.log('Already Answered!');
        return ;
      }
      console.log('Not registered answer yet!');
      vm.selectedAnswer = selection;
      return;
    },
    submit: function (data) {
      vm.correctAnswer = (data.Answer === vm.selectedAnswer) ? true : false;
      if(data.answered && !data.answered.answered){
        data.answered = {answered: true, optionSelected: vm.selectedAnswer, isCorrect: vm.correctAnswer};
        console.log(data.answered && data.answered.answered);
        vm.totalAnswered++;
      }
      return
    },
    finish: function () {
      vm.stopTimer = true;
      resultFactory.resultData = vm.data;
      $ionicModal.fromTemplateUrl('templates/result-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function (modal) {
        resultFactory.resultModal  = vm.modal = modal;
        vm.modal.show();
      });
    }
  });

  $scope.$on('$destroy', function() {
    if(vm.modal){
      vm.modal.hide();
      vm.modal.remove();
    }
  });

};

angular.module('quizzter').controller('QuickQuestionCtrl', controller);

