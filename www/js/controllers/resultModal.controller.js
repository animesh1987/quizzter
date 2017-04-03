var resultModal = function($scope, resultFactory, $state, $ionicModal, $ionicPopup){

  var vm = this;

  vm.timeNow = new Date();

  /*resultFactory.resultData = [{"ID":"446","Question":"The only supply chain partner with access to business data and forecasts of real data for replacement isaaaa:","QuestionText":"","TmpQuestionText":"The only supply chain partner with access to business data and forecasts of real data for replacement is:","OptA":"A. Consumers","OptB":"B. Retailers","OptC":"C. Distributors","OptD":"D. Manufacturers","OptE":"E. Supply chain","Answer":"B","Explanation":"The only supply chain partner with access to business data and forecasts of real data are the retailers.","GroupId":"7","answered":{"answered":true,"optionSelected":"A","isCorrect":false}},{"ID":"446","Question":"The only supply chain partner with access to business data and forecasts of real data for replacement isaaaa:","QuestionText":"","TmpQuestionText":"The only supply chain partner with access to business data and forecasts of real data for replacement is:","OptA":"A. Consumers","OptB":"B. Retailers","OptC":"C. Distributors","OptD":"D. Manufacturers","OptE":"E. Supply chain","Answer":"B","Explanation":"The only supply chain partner with access to business data and forecasts of real data are the retailers.","GroupId":"7","answered":{"answered":true,"optionSelected":"C","isCorrect":false}},{"ID":"445","Question":"The only supply chain partner with access to business data and forecasts of real data for replacement is:","QuestionText":"","TmpQuestionText":"The only supply chain partner with access to business data and forecasts of real data for replacement is:","OptA":"A. Consumers","OptB":"B. Retailers","OptC":"C. Distributors","OptD":"D. Manufacturers","OptE":"E. Supply chain","Answer":"B","Explanation":"The only supply chain partner with access to business data and forecasts of real data are the retailers.","GroupId":"7","answered":{"answered":true,"optionSelected":"C","isCorrect":false}},{"ID":"446","Question":"The only supply chain partner with access to business data and forecasts of real data for replacement isaaaa:","QuestionText":"","TmpQuestionText":"The only supply chain partner with access to business data and forecasts of real data for replacement is:","OptA":"A. Consumers","OptB":"B. Retailers","OptC":"C. Distributors","OptD":"D. Manufacturers","OptE":"E. Supply chain","Answer":"B","Explanation":"The only supply chain partner with access to business data and forecasts of real data are the retailers.","GroupId":"7","answered":{"answered":true,"optionSelected":"C","isCorrect":false}},{"ID":"446","Question":"The only supply chain partner with access to business data and forecasts of real data for replacement isaaaa:","QuestionText":"","TmpQuestionText":"The only supply chain partner with access to business data and forecasts of real data for replacement is:","OptA":"A. Consumers","OptB":"B. Retailers","OptC":"C. Distributors","OptD":"D. Manufacturers","OptE":"E. Supply chain","Answer":"B","Explanation":"The only supply chain partner with access to business data and forecasts of real data are the retailers.","GroupId":"7","answered":{"answered":true,"optionSelected":"C","isCorrect":false}}];*/

  vm.results = resultFactory;

  vm.formatNumber = function (number) {
    if(number < 10){
      return '0' + number;
    }
    return number;
  };

  vm.hide = function () {
    resultFactory.resultModal.hide();
    $ionicModal.stack.remove(resultFactory.resultModal);
    $state.go('home');
    console.log('hide modal', $ionicModal);
  };

  vm.showDetail = function (question, $event) {
    console.log(question);
    /*$ionicPopup.show(
      template: "<div>{{vm.}}</div>"
    )*/
  }

};

angular.module('quizzter').controller('ResultModal', resultModal)
