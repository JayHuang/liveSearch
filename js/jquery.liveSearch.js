(function($) {
	var settings = {
		searchinput: '#search',
		hide: true,
		highlight: false,
		highlightcolor: '#99ff99'
	}

	$.fn.liveSearch = function(options) {
		'use strict';

		$.extend(settings, options);
		var $searchTarget = $(this);
		var $searchInput = $(settings.searchinput);
		
		search($searchTarget, $searchInput);
		return this; // Return jQuery object for chaining
	};

	function search(searchTarget, searchInput) {
		var $items = searchTarget.children();

		searchInput.keyup(function() {
			var val = $.trim(searchInput.val()).replace(/ +/g, ' ').toLowerCase();
			var $remaining = $items.show().filter(function() {
				var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
				return !~text.indexOf(val);
			})

			var $match = $items.not($remaining);
			
			if(settings.hide)
				$remaining.hide();
			if(settings.highlight) {
				if(val == '') {
					reset($match);
				} else {
					$match.css('background-color', settings.highlightcolor);
				}
				$remaining.css('background-color', 'none');
			}
		});
	}

	function reset(object) { //Reset all dynamic styling on jQuery object
  		$(object).removeAttr('style');
  	}

})(jQuery);