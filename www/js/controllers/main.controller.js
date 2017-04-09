function maincontroller($ionicHistory, $ionicPopup, $state) {

  var vm = this;

  _.extend(vm , {
    GoBack: function(){

      if($state.current.name == 'quick-quiz'){
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
      } else{
        $ionicHistory.goBack();
      }
    }
  });

  return;

};

angular.module('quizzter').controller('mainCtrl', maincontroller);
