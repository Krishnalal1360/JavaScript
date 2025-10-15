  $(document).ready(function(){

    const $item2 = $("#item2");

    // children() -> direct children
    $("#childrenBtn").click(function(){
      const children = $item2.children().map(function(){ return this.id; }).get();
      $("#result").text("children(): " + children.join(", "));
    });

    // find() -> all descendants
    $("#findBtn").click(function(){
      const descendants = $item2.find(".item").map(function(){ return this.id; }).get();
      $("#result").text("find(): " + descendants.join(", "));
    });

    // siblings() -> all siblings
    $("#siblingsBtn").click(function(){
      const siblings = $item2.siblings().map(function(){ return this.id; }).get();
      $("#result").text("siblings(): " + siblings.join(", "));
    });

    // next() -> immediate next sibling
    $("#nextBtn").click(function(){
      const nextId = $item2.next().attr("id");
      $("#result").text("next(): " + nextId);
    });

    // nextAll() -> all following siblings
    $("#nextAllBtn").click(function(){
      const nextAll = $item2.nextAll().map(function(){ return this.id; }).get();
      $("#result").text("nextAll(): " + nextAll.join(", "));
    });

    // nextUntil() -> next siblings until selector
    $("#nextUntilBtn").click(function(){
      const nextUntil = $item2.nextUntil("#item4").map(function(){ return this.id; }).get();
      $("#result").text("nextUntil('#item4'): " + nextUntil.join(", "));
    });

    // prev() -> immediate previous sibling
    $("#prevBtn").click(function(){
      const prevId = $item2.prev().attr("id");
      $("#result").text("prev(): " + prevId);
    });

    // prevAll() -> all previous siblings
    $("#prevAllBtn").click(function(){
      const prevAll = $item2.prevAll().map(function(){ return this.id; }).get();
      $("#result").text("prevAll(): " + prevAll.join(", "));
    });

    // prevUntil() -> previous siblings until selector
    $("#prevUntilBtn").click(function(){
      const prevUntil = $item2.prevUntil("#item1").map(function(){ return this.id; }).get();
      $("#result").text("prevUntil('#item1'): " + prevUntil.join(", "));
    });

  });