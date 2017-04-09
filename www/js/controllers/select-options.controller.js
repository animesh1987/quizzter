var controller = function($state){
  var vm = this;

  vm.title = 'Select Quiz';

  vm.Authfor500 = false;
  vm.AuthforAll = false;

  vm.unlockNow = function (type) {
    console.log(type);
  };


  console.log(vm);
};

angular.module('quizzter').controller('SelectOptionsController', controller);

