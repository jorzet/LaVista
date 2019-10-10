//$(document).ready(function(){

var random_live_style_menu_container = document.getElementById('live-style-menu-container');
    
random_live_style_menu_container.addEventListener('click', function(event) {

    var canvas = document.getElementById("canvas-rombos");

    ////////////////////////////////////////////////////////////// Arriba - abajo - 1

    var ctx_ab_1 = canvas.getContext("2d");
    ctx_ab_1.strokeStyle = "#ffffff";
    ctx_ab_1.lineWidth = 0.5;
    var posY_ab_1 = 80;
    var posX_ab_1 = 0;
    var posY_ab_1_static = 100;
    var posX_ab_1_static = 0;
    var lineLength_ab_1 = 68;
    var speed_ab_1 = .5;

    ////////////////////////////////////////////////////////////// Arriba - abajo - 2

    var ctx_ab_2 = canvas.getContext("2d");
    ctx_ab_2.strokeStyle = "#ffffff";
    ctx_ab_2.lineWidth = 0.5;
    var posY_ab_2 = 15;
    var posX_ab_2 = 0;
    var posY_ab_2_static = 0;
    var posX_ab_2_static = 50;
    var lineLength_ab_2 = 100;
    var speed_ab_2 = .6;

    ////////////////////////////////////////////////////////////// Arriba - abajo - 3

    var ctx_ab_3 = canvas.getContext("2d");
    ctx_ab_3.strokeStyle = "#ffffff";
    ctx_ab_3.lineWidth = 0.5;
    var posY_ab_3 = 0;
    var posX_ab_3 = 55;
    var posY_ab_3_static = 0;
    var posX_ab_3_static = 50;
    var lineLength_ab_3 = 101;
    var speed_ab_3 = .4;

    ////////////////////////////////////////////////////////////// Arriba - abajo - 4

    var ctx_ab_4 = canvas.getContext("2d");
    ctx_ab_4.strokeStyle = "#ffffff";
    ctx_ab_4.lineWidth = 0.5;
    var posY_ab_4 = 0;
    var posX_ab_4 = 120;
    var posY_ab_4_static = 0;
    var posX_ab_4_static = 50;
    var lineLength_ab_4 = 35;
    var speed_ab_4 = .4;

    ////////////////////////////////////////////////////////////// Abajo - arriba - 1

    var ctx_ba_1 = canvas.getContext("2d");
    ctx_ba_1.strokeStyle = "#ffffff";
    ctx_ba_1.lineWidth = 0.5;
    var posY_ba_1 = 190;
    var posX_ba_1 = 0;
    var posY_ba_1_static = 0;
    var posX_ba_1_static = 50;
    var lineLength_ba_1 = 35;
    var speed_ba_1 = .6;

    ////////////////////////////////////////////////////////////// Abajo - arriba - 2

    var ctx_ba_2 = canvas.getContext("2d");
    ctx_ba_2.strokeStyle = "#ffffff";
    ctx_ba_2.lineWidth = 0.5;
    var posY_ba_2 = 255;
    var posX_ba_2 = 0;
    var posY_ba_2_static = 0;
    var posX_ba_2_static = 50;
    var lineLength_ba_2 = 100;
    var speed_ba_2 = .5;

    ////////////////////////////////////////////////////////////// Abajo - arriba - 3

    var ctx_ba_3 = canvas.getContext("2d");
    ctx_ba_3.strokeStyle = "#ffffff";
    ctx_ba_3.lineWidth = 0.5;
    var posY_ba_3 = 270;
    var posX_ba_3 = 55;
    var posY_ba_3_static = 0;
    var posX_ba_3_static = 50;
    var lineLength_ba_3 = 100;
    var speed_ba_3 = .4;

    ////////////////////////////////////////////////////////////// Abajo - arriba - 4

    var ctx_ba_4 = canvas.getContext("2d");
    ctx_ba_4.strokeStyle = "#ffffff";
    ctx_ba_4.lineWidth = 0.5;
    var posY_ba_4 = 270;
    var posX_ba_4 = 120;
    var posY_ba_4_static = 0;
    var posX_ba_4_static = 50;
    var lineLength_ba_4 = 67;
    var speed_ba_4 = .2;


    //////////////////////////////////////////////////////////////////////////////

    function drawLine() {

        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_1.beginPath();
        ctx_ab_1.moveTo(posX_ab_1, posY_ab_1);
        ctx_ab_1.lineTo(posX_ab_1+lineLength_ab_1, posY_ab_1+lineLength_ab_1);
        ctx_ab_1.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_2.beginPath();
        ctx_ab_2.moveTo(posX_ab_2, posY_ab_2);
        ctx_ab_2.lineTo(posX_ab_2+lineLength_ab_2, posY_ab_2+lineLength_ab_2);
        ctx_ab_2.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_3.beginPath();
        ctx_ab_3.moveTo(posX_ab_3, posY_ab_3);
        ctx_ab_3.lineTo(posX_ab_3+lineLength_ab_3, posY_ab_3+lineLength_ab_3);
        ctx_ab_3.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_4.beginPath();
        ctx_ab_4.moveTo(posX_ab_4, posY_ab_4);
        ctx_ab_4.lineTo(posX_ab_4+lineLength_ab_4, posY_ab_4+lineLength_ab_4);
        ctx_ab_4.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_1.beginPath();
        ctx_ba_1.moveTo(posX_ba_1, posY_ba_1);
        ctx_ba_1.lineTo(posX_ba_1+lineLength_ba_1, posY_ba_1-lineLength_ba_1);
        ctx_ba_1.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_2.beginPath();
        ctx_ba_2.moveTo(posX_ba_2, posY_ba_2);
        ctx_ba_2.lineTo(posX_ba_2+lineLength_ba_2, posY_ba_2-lineLength_ba_2);
        ctx_ba_2.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_3.beginPath();
        ctx_ba_3.moveTo(posX_ba_3, posY_ba_3);
        ctx_ba_3.lineTo(posX_ba_3+lineLength_ba_3, posY_ba_3-lineLength_ba_3);
        ctx_ba_3.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_4.beginPath();
        ctx_ba_4.moveTo(posX_ba_4, posY_ba_4);
        ctx_ba_4.lineTo(posX_ba_4+lineLength_ba_4, posY_ba_4-lineLength_ba_4);
        ctx_ba_4.stroke();
        /////////////////////////////////////////////////////////////////////////////
        
    }
    
    function moveLine () {

        /////////////////////////////////////////////////////////////////////////////
        posY_ab_1 += speed_ab_1;
        posX_ab_1 += speed_ab_1;
        
        //if (posY_ab_1 < 0 || posY_ab_1 > canvas.height || posX_ab_1 < 0 || posX_ab_1 > canvas.width) {
        if ( posY_ab_1+lineLength_ab_1 > canvas.height - 35 ) {
            // Repetido
            //posY_ab_1 = posY_ab_1_static;
            //posX_ab_1 = posX_ab_1_static;
            // Detenido
            speed_ab_1 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_ab_2 += speed_ab_2;
        posX_ab_2 += speed_ab_2;
        
        if ( posY_ab_2+lineLength_ab_2 > canvas.height - 68 ) {
            speed_ab_2 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_ab_3 += speed_ab_3;
        posX_ab_3 += speed_ab_3;
        
        if ( posY_ab_3+lineLength_ab_3 > canvas.height - 102 ) {
            speed_ab_3 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_ab_4 += speed_ab_4;
        posX_ab_4 += speed_ab_4;
        
        if ( posY_ab_4+lineLength_ab_4 > canvas.height - 168 ) {
            speed_ab_4 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_ba_1 -= speed_ba_1;
        posX_ba_1 += speed_ba_1;
        
        if ( posY_ba_1-lineLength_ba_1 < canvas.height - 202 ) {
            speed_ba_1 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_ba_2 -= speed_ba_2;
        posX_ba_2 += speed_ba_2;
        
        if ( posY_ba_2-lineLength_ba_2 < canvas.height - 202 ) {
            speed_ba_2 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_ba_3 -= speed_ba_3;
        posX_ba_3 += speed_ba_3;
        
        if ( posY_ba_3-lineLength_ba_3 < canvas.height - 167 ) {
            speed_ba_3 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_ba_4 -= speed_ba_4;
        posX_ba_4 += speed_ba_4;
        
        if ( posY_ba_4-lineLength_ba_4 < canvas.height - 102 ) {
            speed_ba_4 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        
    }
    
    function loop() {
        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_1.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_2.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_3.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_ab_4.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_1.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_2.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_3.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_ba_4.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        moveLine();
        drawLine();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    


});
//});