    $(document).ready(function() {

      // Add multiple classes
      $("#addBtn").click(function() {
        $("#box").addClass("red round shadow");
      });

      // Remove specific classes
      $("#removeBtn").click(function() {
        $("#box").removeClass("red round shadow");
      });

      // Toggle classes (adds if missing, removes if present)
      $("#toggleBtn").click(function() {
        $("#box").toggleClass("red round shadow");
      });

    });