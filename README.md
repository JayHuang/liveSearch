liveSearch
==========

jQuery plugin to filter through data on a page as you type

###How to use the plugin

**Note:** As this is a jQuery plugin, you will need to include jQuery prior to using this plugin.

Call liveSearch() on the container you wish to search:

	$('.live-search').rotateQuotes();

You will need an input field to enter the search value, the plugin looks for the `#search` ID, but you can change that:

	$('.live-search').rotateQuotes({searchInput: '#filter-input'});

The plugin will hide all elements within the container that do not contain the search input (case-insensitive).

The search runs immediately as the search input changes.

#Copyright and license

Copyright 2013 Jay Huang under the MIT license.
