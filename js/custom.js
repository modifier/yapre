$(document).ready(function () {
	var oracle_presentation = new Presentation($(".oracle-presentation"));
	oracle_presentation.toggleFullscreenButton(false);
	oracle_presentation.setPlayParams(2000, true);

	var schemotechics_presentation = new Presentation($(".schemotechics-presentation"));
	$("#schemotechics-button").on("click", function () {
		oracle_presentation.toggleFullscreen(true);
	});
});