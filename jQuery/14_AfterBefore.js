    $(document).ready(function() {
      let beforeCount = 1;
      let afterCount = 1;

      // Insert before Box 1
      $("#beforeBtn").click(function() {
        $("#box1").before('<div class="box newBox">Before ' + beforeCount + '</div>');
        beforeCount++;
      });

      // Insert after Box 2
      $("#afterBtn").click(function() {
        $("#box2").after('<div class="box newBox">After ' + afterCount + '</div>');
        afterCount++;
      });

      // Clear all inserted boxes
      $("#clearBtn").click(function() {
        $(".newBox").remove();
        beforeCount = 1;
        afterCount = 1;
      });
    });