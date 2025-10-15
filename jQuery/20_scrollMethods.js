$(document).ready(function() {

  const $box = $("#myBox");

  // Show current scroll positions
  $("#getScroll").on("click", function() {
    const top = $box.scrollTop();
    const left = $box.scrollLeft();
    $("#result").html(`scrollTop: ${top}px<br>scrollLeft: ${left}px`);
  });

  // Scroll vertically down by 100px
  $("#scrollDown").on("click", function() {
    $box.scrollTop($box.scrollTop() + 100);
  });

  // Scroll horizontally right by 100px
  $("#scrollRight").on("click", function() {
    $box.scrollLeft($box.scrollLeft() + 100);
  });

  // Reset scroll to top-left
  $("#resetScroll").on("click", function() {
    $box.scrollTop(0);
    $box.scrollLeft(0);
  });

  // Live scroll updates
  $box.on("scroll", function() {
    $("#result").html(`
      scrollTop: ${$(this).scrollTop()}px<br>
      scrollLeft: ${$(this).scrollLeft()}px
    `);
  });

});
