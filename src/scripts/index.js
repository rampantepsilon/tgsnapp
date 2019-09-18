window.$ = window.jQuery = require('jquery');

$(document).ready(function(){
	// Set trigger and container variables
	var container = $('#content');
	var intro = $('#intro');
	var links = $('#links');

	container.hide();
	links.hide();
	intro.show();

	intro.load('image.html');
	// load target page into container
	container.load('home.html');

	intro.delay(1000).fadeOut( 1000, function() {
		container.show();
		links.show();
		intro.hide();
	})
});
