$(document).ready(function(){
    $("#canvas-croquis").mouseover(function(){
        var c = document.getElementById("canvas-croquis");
        var ctx = c.getContext("2d");
        ctx.strokeStyle = "#103C67";
        ctx.lineWidth = 4;
        ctx.moveTo(49,45);
        ctx.lineTo(65,71);
        ctx.lineTo(186,96);
        ctx.lineTo(199,92);
        ctx.lineTo(209,98);

        var ctx_1 = c.getContext("2d");
        ctx_1.strokeStyle = "#103C67";
        ctx_1.lineWidth = 4;
        ctx_1.moveTo(68,170);
        ctx_1.lineTo(130,178);
        ctx_1.lineTo(172,225);
        ctx_1.lineTo(178,238);
        ctx_1.lineTo(187,236);
        ctx_1.lineTo(196,228);
        ctx_1.lineTo(280,255);

        var ctx_2 = c.getContext("2d");
        ctx_2.strokeStyle = "#103C67";
        ctx_2.lineWidth = 4;
        ctx_2.moveTo(143,191);
        ctx_2.lineTo(148,183);
        ctx_2.lineTo(137,164);
        ctx_2.lineTo(158,160);
        ctx_2.lineTo(210,133);
        ctx_2.lineTo(210,105);





        ctx.stroke();
        ctx_1.stroke();
    });

    $("#canvas-croquis").mouseout(function(){
        var c = document.getElementById("canvas-croquis");
        var ctx = c.getContext("2d");
        ctx.clearRect(10, 10, 220, 100);
        var ctx_1 = c.getContext("2d");
        ctx_1.clearRect(10, 10, 320, 400);
        var ctx_2 = c.getContext("2d");
        ctx_2.clearRect(10, 10, 320, 400);
    });

    var e = document.getElementById('canvas-croquis');
    e.addEventListener('click', function(event) {
        window.open('https://g.page/LaVistaResidencialQueretaro?share', '_blank');
    });

});