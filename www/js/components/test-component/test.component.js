var test = {
  template: "<div>This is a test</div>",
  controller: function ($state){
    console.log('Test Controller');
  }
};

console.log(test);

angular.module('quizzter')
  .component('test', test)
  .config(function($stateProvider, $urlRouterProvider){

    console.log('aaaa');
    $stateProvider
      .state('home.test', {
        url: 'test',
        views: {
          "@homeLayout": {
            template: '<div>This is another shit</div>'
          }
        }
    });


  });

/*template: '<test></test>'*/
