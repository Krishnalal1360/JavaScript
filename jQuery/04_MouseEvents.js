$(document).ready(()=>{
    //
    $("#btn-1").click(()=>{
        $("#btn-1").css("color", "red");
    });
    //
    $("#btn-2").dblclick(()=>{
        $("#btn-2").css("color", "blue");
    });
    //
    $("#btn-3").contextmenu(()=>{
        $("#btn-3").css("color", "green");
    });
    //
    $("#btn-4").mouseenter(()=>{
        $("#btn-4").css("color", "yellow");
    });
    //
    $("#btn-5").mouseout(()=>{
        $("#btn-5").css("color", "orange");
    });
});