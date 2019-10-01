window.$ = window.jQuery = require('jquery');

var currentVer = version.current;

$(document).ready(function(){
  $("#version").html("<font face='Sancreek'>Checking for Updates</font>");
  $.getJSON("https://api.github.com/repos/rampantepsilon/tgsnapp/releases", function(result){
    var commit = result[0].tag_name;
    var noUpdate = "<font face='Sancreek'><a id='betaCheck'>No Release Updates Available. Click Here to check for Beta/Alpha Releases</a></font>";
    var noUpdate2 = "<font face='Sancreek'>No Beta/Alpha Updates Available.</font>";
    var update = "<font face='Sancreek'>New Version (v" + commit + ") available! <a href='https://github.com/rampantepsilon/tgsnapp/releases/' target='_blank'>Click Here to Download</a></font>";
    var updateStatus = "";

    for (i=0; i < result.length;i++){
      if (result[i].tag_name != currentVer && result[i].tag_name > currentVer && result[i].tag_name.indexOf('alpha') == -1 && result[i].tag_name.indexOf('beta') == -1){
        updateStatus = "<font face='Sancreek'>New Version (v" + result[i].tag_name + ") available! <a href='https://github.com/rampantepsilon/tgsnapp/releases/' target='_blank'>Click Here to Download</a></font>";
      }
    }
    if (updateStatus == "") {
      updateStatus = noUpdate;
    }

    $('#version').html(updateStatus);

    $("#betaCheck").click(function(){
      $("#version").html("<font face='Sancreek'>Checking for Beta/Alpha Releases</font>");
      if (commit != currentVer && commit > currentVer){
        updateStatus = update;
      }
      else {
        updateStatus = noUpdate2;
      }

      $('#version').delay(2000).queue(function(n){
        $(this).html(updateStatus);
         n();
       })
    })
  })
})
