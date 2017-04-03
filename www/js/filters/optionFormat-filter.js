function optionFormat(){
  return  function(string){
    return string.split(/[.|)]/).slice(1).join('.');
  }
}

angular.module('quizzter').filter('optionFormat', optionFormat);
