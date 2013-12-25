$(document).ready(function () {
	var presentations = [];
	$(".presentation").each(function() {
		presentations.push(new Presentation(this));
	});

	presentations[0].setSlide(1);
	presentations[0].setPlayParams(null, true);
});