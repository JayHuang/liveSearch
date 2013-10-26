(function($) {
	$.fn.liveSearch = function(options) {
		'use strict';

		var settings = $.extend({}, $.fn.liveSearch.defaults, options);
		var $searchTarget = $(this);
		var $searchInput = $(settings.searchInput);
		
		search($searchTarget, $searchInput);
		return this; // Return jQuery object for chaining
	};

	function search(searchTarget, searchInput) {
		var items = searchTarget.children();

		searchInput.keyup(function(){
			var val = $.trim(searchInput.val()).replace(/ +/g, ' ').toLowerCase();
			items.show().filter(function() {
				var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
				return !~text.indexOf(val);
			}).hide();
		});
	}

	$.fn.liveSearch.defaults = {
		searchInput: '#search'
	}
})(jQuery);