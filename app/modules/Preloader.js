'use strict';

var AnimationController = require('../modules/AnimationController');

var Preloader = function() {

	this.animate = new AnimationController();

	var LoadImages = LoadImages || function(a, d, z) {
		a instanceof Array || (a = [a]);
		for (var e = a.length, f = 0, g = e; g--;) {
			var b = document.createElement("img");
			b.onload = function() {
				f++; 
				f >= e && isFunction(d) && d(z)
			};
			b.src = a[g]; 
		}
	}

	var isFunction = isFunction || function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}

	LoadImages([
		'http://www.intrawallpaper.com/static/images/Hi-Tech-Wallpaper-1.png',
		'http://www.intrawallpaper.com/static/images/Lenovo-wallpaper-6.jpg'
	], function() {
		TweenLite.to('#overlay', 0.5, {
			autoAlpha: 0
		});
	});

};

module.exports = Preloader;