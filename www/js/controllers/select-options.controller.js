var controller = function($scope, $ionicNavBarDelegate, $timeout){
  var vm = this;

  vm.title = 'Quizzter';

  console.log(vm);
};

angular.module('quizzter').controller('SelectOptionsController', controller);

