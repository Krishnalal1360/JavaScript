   $(document).ready(function(){

      // Wrap each paragraph individually
      $("#btnWrap").click(function(){
        $("#paragraphs p").wrap("<div class='box'></div>");
      });

      // Unwrap removes immediate parent
      $("#btnUnwrap").click(function(){
        $("#paragraphs p").unwrap();
      });

      // Reset restores the original state
      $("#btnReset").click(function(){
        // Rebuild the inner HTML safely
        $("#paragraphs").html(`
          <p>Paragraph 1</p>
          <p>Paragraph 2</p>
          <p>Paragraph 3</p>
        `);
      });

    });