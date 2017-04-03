var resultService = function(){
  return {
    timetaken: {
      minutes: null,
      seconds: null
    },

    resultData: null,

    resultModal: null,

    getCorrectAnswers: function () {
      console.log(this.resultData);
      var answered = _.pluck(this.resultData, 'answered');

      return{
        totalQuestions: this.resultData.length,
        answered: answered.length,
        correctAnswer: _.where(answered, {isCorrect: true}).length,
        percentage: _.where(answered, {isCorrect: true}).length/this.resultData.length
      }
    }
  }
};

angular.module('quizzter')
  .factory('resultFactory', resultService)
