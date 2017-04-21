var onReady = function() {
  return angular.bootstrap(document, ['quizzter']);
};

angular.module('quizzter', ['ngMaterial', 'ui.router', 'ionic'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
        StatusBar.styleLightContent();
        StatusBar.backgroundColorByHexString("#a994f0");
      }
      if(navigator && navigator.splashscreen){
        navigator.splashscreen.hide();
      }
    });
  })
  .config(function ($mdGestureProvider) {
    $mdGestureProvider.skipClickHijack();
  });

if(window.isCordova){
  console.log('ISCordova');
  angular.element(document).on('deviceready', onReady);
}
else{
  angular.element(document).ready(onReady);
}
