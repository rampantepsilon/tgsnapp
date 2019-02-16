$(document).ready(function(){
	$("#articles").hide();
	$("#articleHide").hide();
	$("#articlePop").show();

	var show = $('#articlePop');
	var hide = $('#articleHide');
	var popout = $('#articlePopout');

	show.click(function(){
		$("#articles").show();
		$("#articleHide").show();
		$("#articlePop").hide();
	})

	hide.click(function(){
		$("#articles").hide();
		$("#articleHide").hide();
		$("#articlePop").show();
	})

	popout.click(function(){
		$("#articles").hide();
		$("#articleHide").hide();
		$("#articlePop").show();

		window.open('articles.html', 'TGS Articles', 'width=1000, height=600');
	})
})