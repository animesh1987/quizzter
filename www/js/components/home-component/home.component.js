var homeComponent = {
  templateUrl: "js/components/home-component/home.html",
  controller: function (){
    console.log('Home Controller');
  }
};

angular.module('quizzter')
  .component('home', homeComponent)
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('homeLayout', {
        abstract: true,
        url: '/',
        template: '<home></home>'
      }).state('home', {
        parent: 'homeLayout',
        url: '',
        views: {
          "@homeLayout": {
            template: "<md-button ui-sref='home.test'>This is temp shit</md-button>"
          }
        }
      })

  });
