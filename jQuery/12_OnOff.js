    $(document).ready(function() {
      const $box = $("#box");
      const $output = $("#output");

      // Function for mouseenter
      function mouseEnter() {
        $box.css("background-color", "orange");
        $output.text("Mouse entered the box!");
      }

      // Function for mouseleave
      function mouseLeave() {
        $box.css("background-color", "lightblue");
        $output.text("Mouse left the box!");
      }

      // Function for click
      function boxClick() {
        $box.css("background-color", "green");
        $output.text("Box clicked!");
      }

      // Attach events
      $("#attachEvents").click(function() {
        $box.on("mouseenter", mouseEnter)
            .on("mouseleave", mouseLeave)
            .on("click", boxClick);
        $output.text("Mouse events attached!");
      });

      // Remove events
      $("#removeEvents").click(function() {
        $box.off("mouseenter", mouseEnter)
            .off("mouseleave", mouseLeave)
            .off("click", boxClick);
        $output.text("Mouse events removed!");
        // Reset box color
        $box.css("background-color", "lightblue");
      });
    });