#Watch currently active row (jQuery plugin)

##Description
When the user scrolls the page, the currently active content
row will be tracked. If a callback function is defined, then this 
function will be executed once the currently active row has been
identified. e.g. if you need to mark an anchor link as active
according to the current scroll position in a one-page layout.

Optional: set a variable 'anchorAnimateOffset' if the scroll position
should be measured from a fixed offset point instead of the top
of the browser window.

##Usage
Example, where each content row in the layout is marked with the 
classes *module* and *row*.
```
$('.module.row').watchCurrentlyActiveRow();

or

var wasCurrentlyActiveRow, currentlyActiveRow;

$('.module.row').watchCurrentlyActiveRow(function(){
	if(wasCurrentlyActiveRow){
		wasCurrentlyActiveRow.removeClass('currentlyActiveRow');	
	}
	if(currentlyActiveRow){
		currentlyActiveRow.addClass('currentlyActiveRow');
	}
});
```

##Author
Mark Howells-Mead | www.permanenttourist.ch/github | Since August 2015

##License
Use this code freely, widely and for free. Provision of this code provides and implies no guarantee.

Please respect the GPL v2 licence, which is available via http://www.gnu.org/licenses/gpl-2.0.html