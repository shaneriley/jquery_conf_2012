$(function() {
  var $triggers = $(".details h1");
  $triggers.accordion();

  $("a").click(function(e) {
    e.preventDefault();
    var $last = $triggers.eq(-1);
    $last.unbind("click").accordion({ anim_method: "toggle" });
    $last.closest(".details").find(".full_post p").click(function() {
      $last.click();
    });
  });
});
