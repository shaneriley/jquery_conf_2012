;(function($) {
  if (!$) { return; }

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
