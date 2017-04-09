

angular.module('quizzter')
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "templates/welcome.html"
      })
      .state('select-options', {
        url: '/select-options',
        templateUrl: "templates/select-options.html",
        controller: 'SelectOptionsController as $ctrl'
      })
      .state('quick-quiz', {
        url: '/quick-quiz:questions',
        templateUrl: "templates/app-body.html",
        controller: 'QuickQuestionCtrl as $ctrl',
        resolve: {
          questions: function(dataFactory, $stateParams){
            selections = []
            for (var i = 0; i < parseInt($stateParams.questions); i++){
              selections.push(dataFactory.data[Math.floor(Math.random() * dataFactory.data.length)])
            }
            return selections;
          }
        }
      });

    $urlRouterProvider.otherwise('/');

});
