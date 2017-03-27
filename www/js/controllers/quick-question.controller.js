var data = [
  {  "ID": "444",
    "Question":  "What is the first requirement when building a demand-driven enterprise?",
    "QuestionText": "",
    "TmpQuestionText": "What is the first requirement when building a demand-driven enterprise?",
    "OptA": "A. Replace the forecasts with real data" ,
    "OptB": "B. Collaboration with partners" ,
    "OptC": "C. Agility",
    "OptD": "D. Responding to variability",
    "OptE": "E. Produce monthly forecast" ,
    "Answer": "A" ,
    "Explanation": "The first requirement is to replace the forecasts with real data." ,
    "GroupId": "7" },
  {  "ID": "445",
    "Question":  "The only supply chain partner with access to business data and forecasts of real data for replacement is:",
    "QuestionText": "",
    "TmpQuestionText": "The only supply chain partner with access to business data and forecasts of real data for replacement is:",
    "OptA": "A. Consumers" ,
    "OptB": "B. Retailers" ,
    "OptC": "C. Distributors",
    "OptD": "D. Manufacturers",
    "OptE": "E. Supply chain" ,
    "Answer": "B" ,
    "Explanation": "The only supply chain partner with access to business data and forecasts of real data are the retailers." ,
    "GroupId": "7" },
  {  "ID": "446",
    "Question":  "The only supply chain partner with access to business data and forecasts of real data for replacement isaaaa:",
    "QuestionText": "",
    "TmpQuestionText": "The only supply chain partner with access to business data and forecasts of real data for replacement is:",
    "OptA": "A. Consumers" ,
    "OptB": "B. Retailers" ,
    "OptC": "C. Distributors",
    "OptD": "D. Manufacturers",
    "OptE": "E. Supply chain" ,
    "Answer": "B" ,
    "Explanation": "The only supply chain partner with access to business data and forecasts of real data are the retailers." ,
    "GroupId": "7" }
]

var controller = function($state, questions){

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
  vm.totalAnswered = 0;
  vm.correctAnswer = null;
  vm.currentQuestion = 0;
  vm.startTimer = true;
  vm.stopTimer = false;

  _.extend(vm, {
    nextQuestion: function(){
      vm.currentQuestion = vm.currentQuestion + 1;
      vm.correctAnswer = null;
      vm.selectedAnswer = null;
    },
    previousQuestion: function(){
      vm.currentQuestion = vm.currentQuestion - 1;
      vm.selectedAnswer = null;
    },
    selectAnswer: function(data, selection){
      if(data.answered && data.answered.answered){
        return ;
      }
      vm.selectedAnswer = selection;
      vm.correctAnswer = (data.Answer === vm.selectedAnswer) ? true : false;
      if(data.answered && !data.answered.answered){
        data.answered = {answered: true, optionSelected: selection, isCorrect: vm.correctAnswer};
        vm.totalAnswered++;
      }
      return
    },
    finish: function () {
      vm.stopTimer = true;
    }
  });

};

angular.module('quizzter').controller('QuickQuestionCtrl', controller);

