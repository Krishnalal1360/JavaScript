$(document).ready(()=>{
    $("h4").css("color", "green");
    //
    $("#p-id").css("background-color", "yellow");
    //
    $(".ul-class").css("border", "2px solid red");
    //
    var x = $("ul li:first").html();
    console.log(x);
    x = $("ul li:last").html();
    console.log(x);
    x = $("ul li:even").css("color", "orange");
    console.log(x);
    x = $("ul li:odd").css("color", "purple");
    console.log(x);
    //
    x = $("*").html();
    console.log(x);
    //
    x = $(".li1-class, .li3-class, .li5-class").html();
    console.log(x);
    //
    x = $("ul li:eq(0)").html();
    console.log(x);
    //
    x = $("ul li:gt(0)").html();
    console.log(x);
});