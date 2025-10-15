    $(document).ready(function() {
      
      // Show current dimensions
      $("#getSize").click(function() {
        let w = $("#box").width();
        let h = $("#box").height();
        let iw = $("#box").innerWidth();
        let ih = $("#box").innerHeight();
        let ow = $("#box").outerWidth();
        let oh = $("#box").outerHeight();

        $("#result").html(`
          <strong>Current Box Dimensions:</strong><br>
          width(): ${w}px<br>
          height(): ${h}px<br>
          innerWidth(): ${iw}px<br>
          innerHeight(): ${ih}px<br>
          outerWidth(): ${ow}px<br>
          outerHeight(): ${oh}px
        `);
      });

      // Set new width/height using jQuery
      $("#setSize").click(function() {
        $("#box").width(300).height(200);
        $("#box").css("background-color", "lightseagreen").text("Resized Box");
      });

      // Reset to original
      $("#reset").click(function() {
        $("#box").width(200).height(150)
          .css("background-color", "lightcoral")
          .text("Sample Box");
        $("#result").html("");
      });
    });