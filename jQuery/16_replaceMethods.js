    $(document).ready(function() {

      // Replace using .replaceWith()
      $("#btnReplaceWith").click(function() {
        $(".box").replaceWith("<div class='box' style='background-color: lightgreen;'>Replaced using replaceWith()</div>");
      });

      // Replace using .replaceAll()
      $("#btnReplaceAll").click(function() {
        $("<div class='box' style='background-color: lightblue;'>Replaced using replaceAll()</div>").replaceAll(".box");
      });

      // Reset the content
      $("#btnReset").click(function() {
        $("#content").html(`
          <p class='box'>Paragraph 1</p>
          <p class='box'>Paragraph 2</p>
          <p class='box'>Paragraph 3</p>
        `);
      });

    });