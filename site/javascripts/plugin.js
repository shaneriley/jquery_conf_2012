;(function($) {
  if (!$) { return; }

  // Create your plugin objects to organize your methods and options
  var accordion = {
    // Defaults start here
    name: "accordion",
    speed: 400,
    selectors: {
      element: null,
      parent: ".details",
      child: ".full_post",
      context: null
    },
    anim_method: "slideToggle",
    data: null,
    after: $.noop,
    // Initial methods used for event callbacks, element and data manipulation, etc.
    toggle: function(e) {
      e.preventDefault();
      var $e = $(this),
          a = $e.data(accordion.name);
      $e.closest(a.selectors.parent).find(a.selectors.child)
        [a.anim_method](a.speed, a.after);
    },
    destroy: function() {
      var $els = this;
      $els.each(function(i) {
        var a = $els.eq(i).data(accordion.name);
        $els.eq(i).unbind("." + a.name).removeData(a.name);
      });
    },
    init: function($els) {
      var a = this;
      var clickHandler = function(e) {
        a.toggle.call(this, e);
      };
      // Be sure to call your events to ensure you're able to override methods
      if (a.selectors.context) {
        $(a.selectors.context).on("click." + a.name, a.selectors.element, a.data, clickHandler);
      }
      else {
        $els.on("click." + a.name, null, a.data, clickHandler);
      }
    }
  };

  // Initialize the plugin
  $.fn[accordion.name] = function(opts) {
    var $els = this,
        method = $.isPlainObject(opts) || !opts ? "" : opts;
    if (method && accordion[method]) {
      accordion[method].apply($els, Array.prototype.slice.call(arguments, 1));
    }
    else if (!method) {
      $els.each(function(i) {
        // Create standalone instance of plugin object.
        // Note that methods can be overrwitten from first use
        var plugin_instance = $.extend(true, { $el: $els.eq(i) }, accordion, opts);
        // Write to data object for easy retrieval
        $els.eq(i).data(accordion.name, plugin_instance);
      });
      accordion.init($els);
    }
    else {
      $.error('Method ' +  method + ' does not exist on jQuery.' + accordion.name);
    }
    return $els;
  };
})(jQuery);
