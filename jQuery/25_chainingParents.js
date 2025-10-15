  $(document).ready(function(){

    const $child = $("#child1");

    // parent() -> immediate parent
    $("#showParent").click(function(){
      const parentId = $child.parent().attr("id");
      $("#result").text("parent() id: " + parentId);
    });

    // parents() -> all ancestors
    $("#showParents").click(function(){
      const ancestors = $child.parents().map(function(){ return this.id || this.tagName; }).get();
      $("#result").text("parents(): " + ancestors.join(" > "));
    });

    // parentsUntil() -> ancestors until selector
    $("#showParentsUntil").click(function(){
      const ancestors = $child.parentsUntil(".grandparent").map(function(){ return this.id || this.tagName; }).get();
      $("#result").text("parentsUntil('.grandparent'): " + ancestors.join(" > "));
    });

    // offsetParent() -> nearest positioned ancestor
    $("#showOffsetParent").click(function(){
      const offsetParentId = $child.offsetParent().attr("id") || $child.offsetParent().prop("tagName");
      $("#result").text("offsetParent(): " + offsetParentId);
    });

    // closest() -> first ancestor matching selector
    $("#showClosest").click(function(){
      const closestId = $child.closest(".grandparent").attr("id");
      $("#result").text("closest('.grandparent') id: " + closestId);
    });

    // Chaining example
    $("#chainingExample").click(function(){
      $child
        .css("background-color", "orange")
        .slideUp(500)
        .slideDown(500)
        .fadeTo(500, 0.5);
      $("#result").text("Chaining applied: css -> slideUp -> slideDown -> fadeTo");
    });

  });