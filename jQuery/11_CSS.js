    $(document).ready(function() {
      // Set one style
      $("#setOne").click(function() {
        $("#box").css("background-color", "orange");
        $("#output").text("Set background-color: orange");
      });

      // Set multiple styles
      $("#setMultiple").click(function() {
        $("#box").css({
          "background-color": "crimson",
          "color": "white",
          "font-size": "24px",
          "border-radius": "20px",
          "box-shadow": "0 0 15px rgba(0,0,0,0.4)"
        });
        $("#output").text("Applied multiple CSS styles using .css({ ... })");
      });

      // Get style
      $("#getStyle").click(function() {
        let bg = $("#box").css("background-color");
        let fs = $("#box").css("font-size");
        $("#output").html(
          `<b>Current Styles:</b><br>Background: ${bg}<br>Font size: ${fs}`
        );
      });

      // Reset styles
      $("#resetStyle").click(function() {
        $("#box").css({
          "background-color": "lightgray",
          "color": "black",
          "font-size": "18px",
          "border-radius": "0",
          "box-shadow": "none"
        });
        $("#output").text("Styles reset to default.");
      });
    });