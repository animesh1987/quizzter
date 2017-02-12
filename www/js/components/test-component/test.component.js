var test = {
  templateUrl: "js/components/test-component/test.html",
  controller: function ($state){
    console.log('Test Controller');
  }
};

angular.module('quizzter')
  .component('test', test);

