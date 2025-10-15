    $(document).ready(function(){
      const $box = $("#animateBox");

      // Move Right
      $("#moveRight").click(function(){
        $box.animate({ left: "+=200px" }, 1500);
      });

      // Move Left
      $("#moveLeft").click(function(){
        $box.animate({ left: "-=200px" }, 1500);
      });

      // Grow
      $("#grow").click(function(){
        $box.animate({ width: "200px", height: "200px" }, 1500);
      });

      // Shrink
      $("#shrink").click(function(){
        $box.animate({ width: "100px", height: "100px" }, 1500);
      });

      // Stop animation immediately
      $("#stopBtn").click(function(){
        $box.stop(true, true);
      });

    });