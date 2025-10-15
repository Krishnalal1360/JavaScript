    $(document).ready(function() {

      // SET button click
      $("#setBtn").click(function() {
        // .html() — set inner HTML
        $("#heading").html("<em>New Heading (Set using .html())</em>");

        // .text() — set plain text
        $("#output").text("Text set using .text(): The form has been updated!");

        // .attr() — change attribute
        $("#heading").attr("style", "color:green; font-weight:bold;");

        // .val() — change form field values
        $("#username").val("Alice");
        $("#country").val("usa");
      });

      // GET button click
      $("#getBtn").click(function() {
        // .html()
        let htmlValue = $("#heading").html();

        // .text()
        let textValue = $("#heading").text();

        // .attr()
        let attrValue = $("#heading").attr("style");

        // .val()
        let nameValue = $("#username").val();
        let countryValue = $("#country").val();

        // Display all results
        $("#output").html(`
          <b>.html():</b> ${htmlValue}<br>
          <b>.text():</b> ${textValue}<br>
          <b>.attr("style"):</b> ${attrValue}<br>
          <b>.val() (Name):</b> ${nameValue}<br>
          <b>.val() (Country):</b> ${countryValue}
        `);
      });

    });