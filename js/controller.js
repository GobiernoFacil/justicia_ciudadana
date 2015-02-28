// PARTIDOS APP
// @package  : justicia
// @location : /js
// @file     : controller.js
// @author  : Hugo Osorio <hugo@gobiernofacil.com>
// @url     : http://hugoosorio.com

define(function(require){
  
  //
  // L O A D   T H E   A S S E T S   A N D   L I B R A R I E S
  // --------------------------------------------------------------------------------
  //
  var Backbone      = require('backbone'),
      gsap	      	= require('gsap');

  //
  // I N I T I A L I Z E   T H E   B A C K B O N E   " C O N T R O L L E R "
  // --------------------------------------------------------------------------------
  //
  var controller = Backbone.View.extend({
    
    // ------------------
    // DEFINE THE EVENTS
    // ------------------
    //
    events : {
    },

    // -----------------
    // SET THE CONTAINER
    // -----------------
    //
    el : "body",

    // ------------------------
    // THE INITIALIZE FUNCTION
    // ------------------------
    //
    initialize : function(){
      	// run the animation
		this.enable_animation();
	},
	

	// 
    // A N I M A T I O N S
    // ------------------------------------------------------------------------------
    //
	enable_animation : function () {
		
		var pauseBtn = this.$("#pause"),
		tl = new TimelineMax(/*{repeat:-1}*/);

		tl.staggerTo(".slide", 1, {x:780, force3D:true}, 5)
		
		tl.pause() // pauses the animation
		tl.paused() // gets paused state, returns true or false
		tl.paused(true) // sets paused state to true
		tl.paused(!tl.paused()) // sets paused state to inverse of current paused state.

		tl.repeatDelay(5);
		
		pauseBtn.on("click", function() {
			tl.paused(!tl.paused());
			var btn_txt		= tl.paused() ? "Continuar" : "Pausa";
			pauseBtn.html('').append(btn_txt);
		})
	}
	           
  });

  return controller;
});