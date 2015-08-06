/*
	Watch currently active row (jQuery plugin)
	
	When the user scrolls the page, the currently active content
	row will be tracked. If a callback function is defined, then this 
	function will be executed once the currently active row has been
	identified. e.g. if you need to mark an anchor link as active
	according to the current scroll position in a one-page layout.

	Optional: set a variable 'anchorAnimateOffset' if the scroll position
	should be measured from a fixed offset point instead of the top
	of the browser window.

	Usage: 
	$('.module.row').watchCurrentlyActiveRow();

	or

	$('.module.row').watchCurrentlyActiveRow(function(){
		if(currentlyActiveRow){
			currentlyActiveRow.addClass('active');
		}
	});

	@since 6.8.2015 (mhm)
*/

var anchorAnimateOffset,
	currentlyActiveRow,
	wasCurrentlyActiveRow;

(function($){

	$.extend($.fn, {
		watchCurrentlyActiveRow: function(callback) {
			if($(this).length){
				var _rows = this;
				if(!wasCurrentlyActiveRow){
					wasCurrentlyActiveRow = $(_rows).first();
				}
				$(window).bind('load scroll resize', function() {
	                var topline = window.pageYOffset + (parseInt(anchorAnimateOffset) * 2);
					$(_rows).each(function () {
						$elem = $(this);
						if(false === ($elem.is(":hidden") || $elem.css("visibility") == "hidden" || $elem.css("opacity") == 0) ) {
							var elementtop = $elem.offset().top;
							if (elementtop < topline) {
								currentlyActiveRow = $elem;
							}
						}
					});
					if(callback){
						callback();
					}
				});
			}
			return this;
		}
	});

})(jQuery);