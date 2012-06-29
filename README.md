# Extensible jQuery Plugin Development

## [Slides](http://www.slideshare.net/shanedriley/extensible-jquery-plugin-development)

## Example Code

This is the corresponding code to my jQuery Conf San Francisco 2012 talk.
You can view a static working version of the page in site/index.html, or you
can get StaticMatic running and view/modify the HAML and SASS for the example.

To get StaticMatic running, make sure you've got RVM installed. Then run
`gem install bundler` and `bundle`. This will install the required gems. Once
that's done, run `staticmatic preview .` from within the root directory of
this app. The HAML and SASS is stored in /src.

Here's a breakdown of the files in site/javascripts:

* __original.js:__ Original plugin code
* __application_original.js:__ Original code used to initialize plugin
* __step1.js to step4.js:__ Refactoring of plugin step by step
* __plugin.js:__ Completed refactor of plugin
* __application.js:__ Final implementation of plugin
