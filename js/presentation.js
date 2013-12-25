var Presentation = function (destination) {
	this._destination = $(destination);
	this._init();
};

Presentation.prototype = {
	_destination: null,
	_wrapper: null,

	_cachedSlides: [],

	_width: 0,
	_height: 0,

	_pointer: 0,

	_interval: 0,
	_loop: false,

	_controls_back: null,
	_controls_fwd: null,

	_init: function () {
		this._cache();
		if (!this._cachedSlides.length) {
			// TODO: No slides in presentation
		}

		this._wrapper = this._destination.find(".slides-wrapper");

		this._width = this._destination.width();
		this._height = this._destination.height();

		// TODO: Check very small sizes

		this._pointer = 0;

		this._addControlElements();
		this._checkArrows();
	},
	_cache: function () {
		var that = this;
		this._cachedSlides = [];
		this._destination.find(".slide").each(function () {
			that._cachedSlides.push($(this));
		});
	},
	_addControlElements: function () {
		var control_panel = $("<div />").addClass("presentation-controls-lower");

		this._controls_to_begin = $("<div />")
			.addClass("presentation-controls-to-begin")
			.on("click", $.proxy(this.firstSlide, this));

		this._controls_to_end = $("<div />")
			.addClass("presentation-controls-to-end")
			.on("click", $.proxy(this.lastSlide, this));

		control_panel
			.append(this._controls_to_begin)
			.append(this._controls_to_end);

		var control_wrapper = $("<div />").addClass("presentation-controls");

		this._controls_back = $("<div />")
			.addClass("presentation-controls-back")
			.on("click", $.proxy(this.prevSlide, this));

		this._controls_fwd = $("<div />")
			.addClass("presentation-controls-fwd")
			.on("click", $.proxy(this.nextSlide, this));

		control_wrapper
			.append(this._controls_back)
			.append(this._controls_fwd)
			.append(control_panel);

		this._destination.append(control_wrapper);
	},
	_checkArrows: function () {
		this._controls_back.toggleClass("enabled", this._pointer > 0);
		this._controls_fwd.toggleClass("enabled", this._pointer < this._cachedSlides.length - 1)
	},
	setSlide: function (index) {
		if (!index) {
			index = this._pointer;
		}

		if (index >= this._cachedSlides.length || index < 0) {
			return;
		}

		this._pointer = index;

		var position = this._cachedSlides[index].position();

		this._wrapper.css("top", -position.top);
		this._wrapper.css("left", -position.left);
		this._checkArrows();
	},
	nextSlide: function () {
		if (this._pointer < this._cachedSlides.length - 1) {
			this._pointer++;
		}
		this.setSlide();
	},
	prevSlide: function () {
		if (this._pointer > 0) {
			this._pointer--;
		}
		this.setSlide();
	},
	firstSlide: function () {
		this._pointer = 0;
		this.setSlide();
	},
	lastSlide: function () {
		this._pointer = this._cachedSlides.length - 1;
		this.setSlide();
	},
	play: function (interval, loop) {
		this.setPlayParams(interval, loop);

		// TODO: play
	},
	setPlayParams: function (interval, loop) {
		this._interval = interval;
		this._loop = loop;
	},
	disableStop: function () {
		// TODO: disable stop button (only pause)
	},
	stop: function () {
		this._interval = 0;
		this._loop = false;

		this.pause();
	},
	pause: function () {

	},
	toggleFullscreen: function (expandOrNot) {
		// TODO: fullscreen
	}
};