var controller = function($scope, $ionicNavBarDelegate, $timeout){
  var vm = this;

  vm.title = 'Home';

  console.log(vm);
};

angular.module('quizzter').controller('SelectOptionsController', controller);

