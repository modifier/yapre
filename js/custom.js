$(document).ready(function () {
	var presentations = [];
	$(".presentation").each(function() {
		presentations.push(new Presentation(this));
	});
});