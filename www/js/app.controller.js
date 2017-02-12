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
  console.log(questions);
  var vm = this;
  if(!!$state.params && !!$state.params.questions){
    vm.questions = $state.params.questions
  }
  vm.data = questions;

  vm.currentQuestion = 1;

  vm.nextQuestion = function(){
    vm.currentQuestion = vm.currentQuestion + 1;
    console.log(vm.currentQuestion);
    vm.selectedAnswer = null;
  };

  vm.selectAnswer = function(data){
    vm.selectedAnswer.substr(vm.selectedAnswer.length - 1)
    if(data.Answer == vm.selectedAnswer.substr(vm.selectedAnswer.length - 1)){
      console.log(vm.selectedAnswer);
    }
  }
};

angular.module('quizzter').controller('AppController', controller);

