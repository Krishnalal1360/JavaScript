    $(document).ready(function(){
      const $box = $("#slideBox");

      // Slide Up
      $("#slideUpBtn").click(function(){
        $box.slideUp(1000); // 1 second
      });

      // Slide Down
      $("#slideDownBtn").click(function(){
        $box.slideDown(1000); // 1 second
      });

      // Slide Toggle
      $("#slideToggleBtn").click(function(){
        $box.slideToggle(1000); // 1 second
      });
    });