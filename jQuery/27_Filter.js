  $(document).ready(function(){

    const $items = $(".container .item");

    // first()
    $("#firstBtn").click(function(){
      $("#result").text("first(): " + $items.first().attr("id"));
    });

    // last()
    $("#lastBtn").click(function(){
      $("#result").text("last(): " + $items.last().attr("id"));
    });

    // eq(index)
    $("#eqBtn").click(function(){
      $("#result").text("eq(2): " + $items.eq(2).attr("id"));
    });

    // filter(selector)
    $("#filterBtn").click(function(){
      const filtered = $items.filter(":contains('2')").map(function(){ return this.id; }).get();
      $("#result").text("filter(:contains('2')): " + filtered.join(", "));
    });

    // not(selector)
    $("#notBtn").click(function(){
      const notFiltered = $items.not(":contains('2')").map(function(){ return this.id; }).get();
      $("#result").text("not(:contains('2')): " + notFiltered.join(", "));
    });

    // slice(start,end)
    $("#sliceBtn").click(function(){
      const sliced = $items.slice(1,4).map(function(){ return this.id; }).get();
      $("#result").text("slice(1,4): " + sliced.join(", "));
    });

    // has(selector)
    $("#hasBtn").click(function(){
      const hasChild = $items.has("#item2a").map(function(){ return this.id; }).get();
      $("#result").text("has('#item2a'): " + hasChild.join(", "));
    });

    // is(selector)
    $("#isBtn").click(function(){
      const isMatch = $items.eq(2).is(":contains('3')");
      $("#result").text("eq(2) is :contains('3')? " + isMatch);
    });

    // each()
    $("#eachBtn").click(function(){
      let text = [];
      $items.each(function(index, el){
        text.push(el.id);
      });
      $("#result").text("each(): " + text.join(", "));
    });

  });