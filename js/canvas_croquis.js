$(document).ready(function(){
    $("#canvas-croquis").mouseover(function(){
        var c = document.getElementById("canvas-croquis");
        var ctx = c.getContext("2d");
        ctx.strokeStyle = "#103C67";
        ctx.lineWidth = 5;
        ctx.moveTo(43,42);
        ctx.lineTo(60,70);
        ctx.lineTo(186,99);
        ctx.lineTo(195,95);
        ctx.lineTo(209,100);
        ctx.stroke();
    });

    $("#canvas-croquis").mouseout(function(){
        var c = document.getElementById("canvas-croquis");
        var ctx = c.getContext("2d");
        ctx.clearRect(10, 10, 220, 100);
    });

    var e = document.getElementById('canvas-croquis');
    e.addEventListener('click', function(event) {
        window.open('https://g.page/LaVistaResidencialQueretaro?share', '_blank');
    });

});
