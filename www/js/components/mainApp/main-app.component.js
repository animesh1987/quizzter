var mainApp = {
  templateUrl: "js/components/mainApp/main-app.html",
  controller: function (){
    console.log('Main App Controller');
  }
};

console.log('Main App');
angular.module('quizzter')
  .component('mainApp', mainApp)
  .config(function ($stateProvider) {

    $stateProvider.state('home.app',{
      url: '/app',
      template: '<div></div>'
    });


  });
