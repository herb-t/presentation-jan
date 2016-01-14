'use strict';
var Preloader = require('../modules/Preloader');
var Reveal = require('../vendor/reveal.js');

var Site = function() {

  // preloads images then shows presentation
  this.loader = new Preloader();

  Reveal.initialize({
	  controls: true,
	  progress: true,
	  history: true,
	  center: true,
	  // default/cube/page/concave/zoom/linear/fade/none 
	  transition: 'fade',
	});

};

module.exports = Site;
