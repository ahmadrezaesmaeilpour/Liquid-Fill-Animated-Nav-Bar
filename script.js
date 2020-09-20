$("#Menu a").on("click", function() {
  var position = $(this)
    .parent().position();
  var width = $(this)
    .parent().width();
  $("#Menu .liquid1").css({ opacity: 1, left: +position.left, width: width });
});

$("#Menu a").on("mouseover", function() {
  var position = $(this)
    .parent().position();
  var width = $(this)
    .parent().width();
  $("#Menu .liquid2").css({ 
    opacity: 1, left: +position.left, width: width })
    .addClass("squeeze");
});

$("#Menu a").on("mouseout", function() {
  $("#Menu .liquid2").css({ opacity: 0 }).removeClass("squeeze");
});

var currentWidth = $("#Menu")
  .find("li:nth-of-type(3) a")
  .parent("li")
  .width();
var current = $("li:nth-of-type(3) a").position();
$("#Menu .liquid1").css({ left: +current.left, width: currentWidth });