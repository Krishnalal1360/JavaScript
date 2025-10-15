$(document).ready(function() {
  
  // Focus event on input
  $("#username").focus(function() {
    $(this).css("background-color", "red");
  });

  // Blur event on input
  $("#username").blur(function() {
    $(this).css("background-color", "green");
  });

  // Select event (when text in input is highlighted)
  $("#username").select(function() {
    $(this).css("background-color", "yellow");
  });

  // Change event on select dropdown
  $("#country").change(function() {
    $(this).css("background-color", "lightblue");
  });

  // Submit event on form
  $("#myForm").submit(function(e) {
    e.preventDefault(); // prevent page reload
    alert("Form submitted!\nName: " + $("#username").val() + "\nCountry: " + $("#country").val());
  });

});
