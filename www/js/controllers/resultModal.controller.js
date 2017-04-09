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
    $state.go('select-options');
    console.log('hide modal', $ionicModal);
  };

  vm.showDetail = function (question, $event) {
    console.log(question);
    var correctMessage = question.answered.isCorrect ? 'Correct' : 'Incorrect' ;
    var popupTemplate = "<div class='col'>" +
        "<div class='text-align-center'> <h1 class='title'> " + correctMessage + "</h1> </div>" +
        "<div class='padding'>" + question.Question + " ? </div>" +
        "<md-divider></md-divider>" +
        "<div class='padding'><span><strong>You Selected:</strong></span> <span> " + question['Opt'+question.answered.optionSelected] + "</span></div>" +
        "<div class='padding'><span><strong>Correct Answer:</strong></span> <span> " + question['Opt'+question.Answer] + " </span></div>" +
        "<md-divider></md-divider>" +
        "<div class='padding'> " + question.Explanation + " </div>" +
      "</div>"
    $ionicPopup.show({
      template: popupTemplate,
      title: 'Answer Summary',
      cssClass: 'question-detail-popup',
      buttons: [
        {
          text: '<b>Got It</b>',
          type: 'button-assertive'
        }
      ]
    })
  }

};

angular.module('quizzter').controller('ResultModal', resultModal)


/*    var popupTemplate = "<div class='col'>" +
 "<div class='text-align-center'> <h1 class='title'> " + correctMessage + "</h1> </div>" +
 "<div class='padding'>" + question.Question + " ? </div>" +
 "<md-divider></md-divider>" +
 "<div class='padding'><span><strong>You Selected:</strong></span> <span> " + question.answered.optionSelected + "</span></div>" +
 "<div class='md-caption'> " + question['Opt'+question.answered.optionSelected] + "</div>" +
 "<div class='padding'><span><strong>Correct Answer:</strong></span> <span> " + question.Answer + " </span></div>" +
 "<div class='md-caption'> " +question['Opt'+question.Answer] + "</div>" +
 "<md-divider></md-divider>" +
 "<div class='padding'> " + question.Explanation + " </div>" +
 "</div>"*/
