
window.handleOpenURL = function(url) {
  'use strict';
  var parameters = url.split('://')[1];
      if(parameters) {
        localStorage.savedOpenUrl = parameters
       }  
};
