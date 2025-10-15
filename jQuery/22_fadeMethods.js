    $(document).ready(function(){
      const $box = $("#fadeBox");

      // Fade In
      $("#fadeInBtn").click(function(){
        $box.fadeIn(1000); // 1 second
      });

      // Fade Out
      $("#fadeOutBtn").click(function(){
        $box.fadeOut(1000); // 1 second
      });

      // Fade Toggle
      $("#fadeToggleBtn").click(function(){
        $box.fadeToggle(1000); // 1 second
      });

      // Fade To specific opacity
      $("#fadeToBtn").click(function(){
        $box.fadeTo(1000, 0.5); // 1 second, 50% opacity
      });
    });