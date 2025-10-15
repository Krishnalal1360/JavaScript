$(document).ready(()=>{
    var h;

    h = $("#h-id").html();
    console.log("HTML:", h);

    h = $("#h-id").text();
    console.log("Text:", h);

    h = $("#h-id").attr("name");
    console.log("Attribute (name):", h);

    h = $("#h-id").attr("style");
    console.log("Attribute (style):", h);

    h = $("#h-id").val(); // <h4> has no .val()
    console.log("Value (.val()):", h);
});
