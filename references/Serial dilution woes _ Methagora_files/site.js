/**
 * 	Staff blogs jQuery methods
 * 
 * 	Nature jQuery == window.jQuery
 *  Wordpress jQuery == window.wpjq
 *  .. so always pass '$' into closure to get the right scope 
 * 
 */
var com = com || {};
com.nature = com.nature || {};
com.nature.StaffBlogs = com.nature.StaffBlogs || {};

/**
* hoverIntent is similar to jQuery's built-in "hover" function except that
* instead of firing the onMouseOver event immediately, hoverIntent checks
* to see if the user's mouse has slowed down (beneath the sensitivity
* threshold) before firing the onMouseOver event.
* 
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* hoverIntent is currently available for use in all personal or commercial 
* projects under both MIT and GPL licenses. This means that you can choose 
* the license that best suits your project, and use it accordingly.
* 
* // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
* $("ul li").hoverIntent( showNav , hideNav );
* 
* // advanced usage receives configuration object only
* $("ul li").hoverIntent({
*	sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
*	interval: 100,   // number = milliseconds of polling interval
*	over: showNav,  // function = onMouseOver callback (required)
*	timeout: 0,   // number = milliseconds delay before onMouseOut function call
*	out: hideNav    // function = onMouseOut callback (required)
* });
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($) {
	$.fn.hoverIntent = function(f,g) {
		// default configuration options
		var cfg = {
			sensitivity: 7,
			interval: 100,
			timeout: 0
		};
		// override configuration options with user supplied object
		cfg = $.extend(cfg, g ? { over: f, out: g } : f );

		// instantiate variables
		// cX, cY = current X and Y position of mouse, updated by mousemove event
		// pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
		var cX, cY, pX, pY;

		// A private function for getting mouse position
		var track = function(ev) {
			cX = ev.pageX;
			cY = ev.pageY;
		};

		// A private function for comparing current and previous mouse position
		var compare = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			// compare mouse positions to see if they've crossed the threshold
			if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
				$(ob).unbind("mousemove",track);
				// set hoverIntent state to true (so mouseOut can be called)
				ob.hoverIntent_s = 1;
				return cfg.over.apply(ob,[ev]);
			} else {
				// set previous coordinates for next time
				pX = cX; pY = cY;
				// use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
				ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
			}
		};

		// A private function for delaying the mouseOut function
		var delay = function(ev,ob) {
			ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
			ob.hoverIntent_s = 0;
			return cfg.out.apply(ob,[ev]);
		};

		// A private function for handling mouse 'hovering'
		var handleHover = function(e) {
			// copy objects to be passed into t (required for event object to be passed in IE)
			var ev = jQuery.extend({},e);
			var ob = this;

			// cancel hoverIntent timer if it exists
			if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

			// if e.type == "mouseenter"
			if (e.type == "mouseenter") {
				// set "previous" X and Y position based on initial entry point
				pX = ev.pageX; pY = ev.pageY;
				// update "current" X and Y position based on mousemove
				$(ob).bind("mousemove",track);
				// start polling interval (self-calling timeout) to compare mouse coordinates over time
				if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

			// else e.type == "mouseleave"
			} else {
				// unbind expensive mousemove event
				$(ob).unbind("mousemove",track);
				// if hoverIntent state is true, then call the mouseOut function after the specified delay
				if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
			}
		};

		// bind the function to the two event listeners
		return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover);
	};
})(wpjq);

/* Make sure ALL 'js-xxxxx' flags are set (not just on body tag) */
(function($) {
	$('.js-disabled').removeClass('js-disabled').addClass('js-enabled');
})(jQuery);

/* Bookmark links */ 
(function($){
	$(document).ready(function(){
		   $(".toggle-bookmarking-links").each(function() {
		        var popup = new com.nature.Popup($(this).linkify().find('a'), $(this).next().addClass('bookmarking-popup'), {
		           	hasArrow: false,
		           	position: 'below'
		           });
		        popup.title('Bookmark &amp; Share');
		        popup = $.extend(popup, new com.nature.Broadcaster());
		        popup.init();
		    });
		    $(".share").show();
	});
})(jQuery);

/* Expanding blocks */
(function($){
	var 
		upCss = 'wpn-expand-up',
		downCss = 'wpn-expand-down'
	;
	$('body').delegate('.wpn-expand .wpn-expander','click',function(e){
		e.preventDefault();
		var parent = $(this).closest('div');
		if(parent.hasClass(downCss)) {
			$('div',parent).slideDown('fast');
			parent.addClass(upCss).removeClass(downCss);
		}
		else {
			$('div',parent).slideUp('fast');
			parent.addClass(downCss).removeClass(upCss);
		}
		return false;
	});
	$('.wpn-expand').addClass('wpn-expand-active ' + downCss);
})(wpjq);

/* Custom vertical-tabs tab-box */
(function($) {
	
	var TabBoxV = (function() {
		
		var TabBoxV = function($box) {
			var 
				$tabs = $box.find('.tab'),
				$active = $box.find('.tab-box.active'),
				tabsHeight = 0,
				switchTo = function($tab,override) {
					var contentHeight;
					if ($tab === $active && !override) {
						return false;
					}
					$active.removeClass('active');
					$tab.addClass('active');
					$active = $tab;
					contentHeight = $('.tab-content', $tab).innerHeight();
					if (contentHeight > tabsHeight) {
						$box.css({'background-color' : '#d4d4d4'}).animate({'height' : contentHeight + 'px'}, 'fast');
					}
					else {
						$box.css({'background-color' : '#ffffff'}).animate({'height' : tabsHeight + 'px'}, 'fast');
					}
				}
			;
			$box.addClass('tab-group-v-active'); 
			$tabs
				.wrapInner('<a></a>')
				.find('a')
					.hoverIntent( /* 'tab' swapping is bound to hover event... */
						function() {
							var $parent = $(this).closest('.tab-box');
							if (!$parent.hasClass('active')) {
								switchTo($parent);
							}
						},
						function(){}
					)
					.click( /* ... so make 'tabs' clickable */
						function() {
							window.location = $(this).closest('.tab-box').find('.tab-content a:last').attr('href');
						}
					)
					.end()
				.each( /* init */
					function() {
						var $t = $(this);
						$t.attr('title', $t.text());
						tabsHeight += $t.outerHeight(); // borders included
					}
				)
			;
			this.switchTo = switchTo;
			switchTo($active, true);
		};

		return TabBoxV;

	})();
	
	$('.tab-group-v').each(function() {
		var t = new TabBoxV($(this));
	});
	
})(wpjq);

/**
 * Get querystring params as an array (possibly of arrays) 
 */
com.nature.StaffBlogs.getParamsArray = function() {
	var k, v, kv, e, h = [], p = window.location.search.slice(1).split('&');
	while ( 
			( kv = p.pop() ) 
			&& 
			( e = kv.indexOf('=') ) 
			&& 
			( k = decodeURIComponent( kv.slice( 0, e ) ) ) 
		) 
	{
		v = decodeURIComponent( kv.slice( e + 1 ) );
		h[k] = ((!!h[k]) 
			? 
				( 
						('array' == typeof h[k]) 
					? 
						h[k].push(v) 
					: 
						[ h[k], v ]
				)
			: 
				v
		);
	}
	return h;
};
