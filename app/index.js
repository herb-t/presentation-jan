'use strict';

// var Site = require('./modules/Site');
var Reveal = require('./vendor/reveal.js');

// var site = new Site();


// Full list of configuration options available here: 
// https://github.com/hakimel/reveal.js#configuration 
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  // default/cube/page/concave/zoom/linear/fade/none 
  transition: 'fade',
});
