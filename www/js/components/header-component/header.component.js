var headerComponent = {
  templateUrl: "js/components/header-component/header.html",
  controller: function (){
    console.log('Header Controller');
  }
};

angular.module('quizzter')
  .component('header', headerComponent);
