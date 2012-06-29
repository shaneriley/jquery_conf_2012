$(function() {
  var $triggers = $(".details h1");
  $triggers.accordion({
    selectors: {
      element: "h1",
      context: ".details"
    }
  });

  $("a").click(function(e) {
    e.preventDefault();
    var $last = $triggers.eq(-1);
    $last.data("accordion").anim_method = "toggle";
    $last.closest(".details").find(".full_post p").click($last.data("accordion").toggle);
  });
});
