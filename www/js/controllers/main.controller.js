function maincontroller($ionicHistory, $ionicPopup) {

  var vm = this;

  _.extend(vm , {
    GoBack: function(){
      var confirmPopup = $ionicPopup.confirm({
        title: 'Quiz in Progress!',
        template: 'Are you sure you want to quit the quiz?'
      });


      confirmPopup.then(
        function(res){
          if(res){
            $ionicHistory.goBack();
          }
          else{
            return;
          }
        }
      );
    }
  });

  return;

};

angular.module('quizzter').controller('mainCtrl', maincontroller);
