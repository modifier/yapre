var Presentation = function (destination) {
	this._destination = destination;
};

Presentation.prototype = {
	_destination: null,
	_cachedSlides: [],

	_width: 0,
	_height: 0,

	_pointer: 0,

	_interval: 0,
	_loop: false,

	_init: function () {
		this._cache();
		if (!this._cachedSlides.length) {
			// TODO: No slides in presentation
		}

		this._width = this._destination.width();
		this._height = this._destination.height();

		this._addControlElements();

		this._pointer = 0;
	},
	_cache: function () {
		var that = this;
		this._cachedSlides = [];
		this._destination.find(".slide").each(function () {
			that._cachedSlides.push(this);
		});
	},
	_addControlElements: function () {
		// TODO: Add them
	},
	setSlide: function (index) {
		if (!index) {
			index = this._pointer;
		}
		// TODO: Set slide
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