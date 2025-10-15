    $(document).ready(function(){

      const $box = $("#myBox");

      // Check if element has class 'highlight'
      $("#checkClass").click(function(){
        if($box.hasClass("highlight")){
          $("#result").text("Box has the class 'highlight'");
        } else {
          $("#result").text("Box does NOT have the class 'highlight'");
        }
      });

      // Add class
      $("#addClass").click(function(){
        $box.addClass("highlight");
      });

      // Remove class
      $("#removeClass").click(function(){
        $box.removeClass("highlight");
      });

      // Toggle class
      $("#toggleClass").click(function(){
        $box.toggleClass("highlight");
      });

      // Hide box
      $("#hideBox").click(function(){
        $box.hide(3000, ()=>{
            console.log("Box is hiding within 3 seconds!");
        });
      });

      // Show box
      $("#showBox").click(function(){
        $box.show(3000, ()=>{
            console.log("Box is coming within 3 seconds!");
        });
      });

      // Toggle box visibility
      $("#toggleBox").click(function(){
        $box.toggle(3000, ()=>{
            console.log("Box is toggling within 3 seconds!");
        });
      });

    });