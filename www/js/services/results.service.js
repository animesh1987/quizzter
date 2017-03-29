var resultService = function(){
  return {
    timetaken: {
      minutes: null,
      seconds: null
    },

    resultData: null,

    getCorrectAnswers: function () {
      console.log(this.resultData);
      var answered = _.pluck(this.resultData, 'answered');

      return{
        totalQuestions: this.resultData.length,
        answered: answered.length,
        correctAnswer: _.where(answered, {isCorrect: true}).length
      }
    }
  }
};

angular.module('quizzter')
  .factory('resultFactory', resultService)
