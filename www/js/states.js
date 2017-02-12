

angular.module('quizzter')
  .config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "templates/select-options.html",
        controller: 'SelectOptionsController as $ctrl'
      })
      .state('quick-quiz', {
        url: '/quick-quiz?questions',
        templateUrl: "templates/app-body.html",
        controller: 'AppController as $ctrl',
        resolve: {
          questions: function(dataFactory, $stateParams){
            selections = []
            for (var i = 0; i < parseInt($stateParams.questions); i++){
              console.log(i);
              selections.push(dataFactory.data[Math.floor(Math.random() * dataFactory.data.length)])
            }
            return selections;
          }
        }
      });

    $urlRouterProvider.otherwise('/');

});