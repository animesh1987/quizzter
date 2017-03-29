var resultModal = function($scope, resultFactory, $state){

  var vm = this;

  vm.timeNow = new Date();

  vm.results = resultFactory;

  console.log(resultFactory);

  vm.hide = function () {
    $state.go('home');
    console.log('hide modal');
  };

};

angular.module('quizzter').controller('ResultModal', resultModal)
