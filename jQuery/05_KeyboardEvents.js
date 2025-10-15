$(document).ready(()=>{
    //
    /*$("body").keypress(()=>{
        //
        $("body").css("background-color", "red");
    });*/
    //
    $("body").keydown(()=>{
        $("body").css("background-color", "blue");
    });
    //
    $("body").keyup(function(){
        $(this).css("background-color", "green");
    });
});