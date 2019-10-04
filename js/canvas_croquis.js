$(document).ready(function(){
    $("#canvas-croquis").mouseover(function(){
        var c = document.getElementById("canvas-croquis");
        var ctx = c.getContext("2d");
        ctx.strokeStyle = "#103C67";
        ctx.lineWidth = 5;
        ctx.moveTo(49,45);
        ctx.lineTo(65,71);
        ctx.lineTo(186,96);
        ctx.lineTo(199,92);
        ctx.lineTo(209,98);
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
