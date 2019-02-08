window.$ = window.jQuery = require('jquery');

$(document).ready(function(){
	$("#articles").hide();
	$("#articleHidden").hide();
	$("#articleShown").hide();


	// Set trigger and container variables
	var trigger = $('.navbar a'),
    	container = $('#content'),
    	tgscontainer = $('#articles');
  var d = new Date();
  var day = d.getDay();

  if (day == 6 || day == 0) {
    $("#articleShown").show();
  }

  $("#page").hide();
  $("#intro").delay(1000).fadeOut(1000, function(){
    $("#page").show();
  })

	// Fire on click
	trigger.on('click', function(){
	  	// Set $this for re-use. Set target from data attribute
  		var $this = $(this),
    		target = $this.data('target');       
  		
  		if (target == 'tgsinformation') {
  			$("#articles").show();          		
  			$("#articleHidden").show();
  			$("#articleShown").hide();
  		}
  		
  		else if (target == 'tgsinformation2') {
	  		$("#articles").hide();
  			$("#articleHidden").hide();
  			$("#articleShown").show();
	  	}
    	
    	else {
        	// load target page into container
      		container.load(target + '.html');
    	}
  
  		// Stop normal link behavior
  		return false;
	});
});