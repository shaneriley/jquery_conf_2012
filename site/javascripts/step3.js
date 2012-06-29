;(function($) {
  if (!$) { return; }

  // Create your plugin objects to organize your methods and options
  var accordion = {
    // Defaults start here
    name: "accordion",
    speed: 400,
    selectors: {
      parent: ".details",
      child: ".full_post"
    },
    after: $.noop,
    // Initial methods used for event callbacks, element and data manipulation, etc.
    toggle: function(e) {
      e.preventDefault();
      var $e = $(this),
          a = $e.data(accordion.name);
      $e.closest(a.selectors.parent).find(a.selectors.child)
        .slideToggle(a.speed, a.after);
    },
    init: function() {
      var a = this;
      // Be sure to call your events to ensure you're able to override methods
      a.$el.bind("click." + a.name, function(e) {
        a.toggle.call(this, e);
      });
    }
  };

  $.fn.accordion = function(options) {
    var opts = $.extend({
      speed: 400,
      selectors: {
        parent: ".details",
        child: ".full_post"
      },
      anim_method: "slideToggle",
      after: $.noop
    }, options);
    return this.click(function(e) {
      e.preventDefault();
      var $e = $(this);
      $e.closest(opts.selectors.parent).find(opts.selectors.child)
        [opts.anim_method](opts.speed, opts.after);
    });
  };
})(jQuery);
