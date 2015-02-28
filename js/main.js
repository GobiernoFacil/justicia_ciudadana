// JUSTICIA APP
// date     : 28/02/2015
// @package : justicia
// @file    : main.js
// @version : 1.0.0
// @author  : Hugo Osorio <hugo@gobiernofacil.com>
// @url     : http://hugoosorio.com

require.config({
  baseUrl : '/js',
  paths : {
    jquery        : 'bower_components/jquery/dist/jquery',
    backbone      : "bower_components/backbone/backbone",
    underscore    : "bower_components/underscore/underscore",
    gsap	      : "bower_components/gsap/src/minified/TweenMax.min"
  },
  shim : {
    backbone : {
      deps    : ["jquery","gsap"],
      exports : "Backbone"
    }
  }
});

 var app;

require(['controller'], function(controller){ 
  //var app;
  app = new controller();
});