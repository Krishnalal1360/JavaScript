    $(document).ready(function() {
      let appendCount = 0;
      let prependCount = 0;

      // Append new item at the end
      $("#appendBtn").click(function() {
        //$("#myList").append(`<li>Item ${appendCount} </li>`);
        $(`<li>Item ${appendCount} </li>`).appendTo("#myList");
        appendCount++;
      });

      // Prepend new item at the beginning
      $("#prependBtn").click(function() {
        //$("#myList").prepend(`<li>Item ${prependCount} </li>`);
        $(`<li>Item ${prependCount} </li>`).prependTo("#myList");
        prependCount++;
      });

      // Clear list
      $("#clearBtn").click(function() {
        $("#myList").empty();
        appendCount = 1;
        prependCount = 1;
      });
    });