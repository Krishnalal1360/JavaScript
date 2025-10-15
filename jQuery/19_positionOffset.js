    $(document).ready(function(){

      // position() → relative to offset parent (.outer)
      $("#getPosition").click(function(){
        let pos = $(".inner").position();
        $("#result").html(`
          <strong>position():</strong><br>
          top: ${pos.top}px<br>
          left: ${pos.left}px<br>
          <em>(relative to its parent .outer)</em>
        `);
      });

      // offset() → relative to entire document
      $("#getOffset").click(function(){
        let off = $(".inner").offset();
        $("#result").html(`
          <strong>offset():</strong><br>
          top: ${off.top}px<br>
          left: ${off.left}px<br>
          <em>(relative to the document)</em>
        `);
      });

    });