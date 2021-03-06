$(document).ready(function(){

	// The module pattern
  var feature = (function() {
 
    var delayRedirect = function() {
        triggerBuild()
        timeoutID = window.setTimeout(redirect, 20000);
    };

    var triggerBuild = function(){
      var url = "https://api.netlify.com/build_hooks/5850264cd6865d3dd5975393"
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
      xhr.send({});
    }
 
    var redirect = function() {
      var page = getUrlParameter('page');
      window.location.replace("http://news--boatman-snake-75507.netlify.com/"+page);
    };

    var getUrlParameter = function getUrlParameter(sParam) {
      var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

      for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
      }
    };
 
    // Public API
    return {
        delayRedirect: delayRedirect
    };
  })();
   
  feature.delayRedirect();
})