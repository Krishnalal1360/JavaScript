    $(document).ready(function() {

      // Clone and append
      $("#appendBtn").click(function() {
        $("#original").clone().appendTo("#container1");
      });

      // Clone and prepend
      $("#prependBtn").click(function() {
        $("#original").clone().prependTo("#container1");
      });

      // Clear container
      $("#clearBtn").click(function() {
        $("#container1").find(".box").remove();
      });

    });