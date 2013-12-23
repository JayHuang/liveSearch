liveSearch
==========

jQuery plugin to filter through data on a page as you type

###How to use the plugin

**Note:** As this is a jQuery plugin, you will need to include jQuery prior to using this plugin.

Call liveSearch() on the container you wish to search:

	$('.live-search').liveSearch();

The plugin has 4 optional settings -- `searchinput`, `hide`, `highlight`, and `highlightcolor`

`searchinput` is the selector for the input field, using the jQuery syntax (# is ID matching, . is class matching)

`hide` dictates whether or not to hide the elements that do not match

`highlight` dictates whether or not the matching elements will have background color

`highlightcolor` is the color for the background if `highlight` is on

The default settings are:
```
searchinput: 	'#search',
hide: 			true,
highlight: 		false,
highlightcolor: '#99ff99'
```

You can call liveSearch and pass in any or all of these settings to change the behaviour of the plugin.

	$('.live-search').liveSearch({searchinput: '#filter-input', highlight: true, highlightcolor: '#FFB6C1'});

The plugin runs immediately as the search input changes and will hide all elements within the container that do not contain the search input (case-insensitive).

###Live demo

You can see the plugin live [here](http://www.jayhuang.org/git/demo/liveSearch).

The search runs immediately as the search input changes.

###Copyright and license

Copyright 2013 Jay Huang under the MIT license.
