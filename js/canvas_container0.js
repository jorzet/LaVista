$(document).ready(function(){

    var canvas = document.getElementById("canvas-0-subcontainer-1");

    ////////////////////////////////////////////////////////////// 1

    var ctx_1 = canvas.getContext("2d");
    ctx_1.strokeStyle = "#ffffff";
    ctx_1.lineWidth = 1;
    var posY_1 = -300;
    var posX_1 = -290;
    var posY_1_static = 0;
    var posX_1_static = 50;
    var lineLength_1 = 350;
    var speed_1 = 1;

    ////////////////////////////////////////////////////////////// 2

    var ctx_2 = canvas.getContext("2d");
    ctx_2.strokeStyle = "#ffffff";
    ctx_2.lineWidth = 1;
    var posY_2 = -300;
    var posX_2 = -250;
    var posY_2_static = 0;
    var posX_2_static = 50;
    var lineLength_2 = 350;
    var speed_2 = 1;

    ////////////////////////////////////////////////////////////// 3

    var ctx_3 = canvas.getContext("2d");
    ctx_3.strokeStyle = "#ffffff";
    ctx_3.lineWidth = 1;
    var posY_3 = 1100;
    var posX_3 = -350;
    var posY_3_static = 0;
    var posX_3_static = 50;
    var lineLength_3 = 300;
    var speed_3 = 1;

    ////////////////////////////////////////////////////////////// 4

    var ctx_4 = canvas.getContext("2d");
    ctx_4.strokeStyle = "#ffffff";
    ctx_4.lineWidth = 1;
    var posY_4 = 1100;
    var posX_4 = -300;
    var posY_4_static = 0;
    var posX_4_static = 50;
    var lineLength_4 = 300;
    var speed_4 = 1;

    ////////////////////////////////////////////////////////////// 5

    var ctx_5 = canvas.getContext("2d");
    ctx_5.strokeStyle = "#ffffff";
    ctx_5.lineWidth = 1;
    var posY_5 = 1100;
    var posX_5 = 150;
    var posY_5_static = 0;
    var posX_5_static = 50;
    var lineLength_5 = 300;
    var speed_5 = 1;

    ////////////////////////////////////////////////////////////// 6

    var ctx_6 = canvas.getContext("2d");
    ctx_6.strokeStyle = "#ffffff";
    ctx_6.lineWidth = 1;
    var posY_6 = 1100;
    var posX_6 = 950;
    var posY_6_static = 0;
    var posX_6_static = 50;
    var lineLength_6 = 300;
    var speed_6 = 1;

    ////////////////////////////////////////////////////////////// 7

    var ctx_7 = canvas.getContext("2d");
    ctx_7.strokeStyle = "#ffffff";
    ctx_7.lineWidth = 1;
    var posY_7 = 1300;
    var posX_7 = 1200;
    var posY_7_static = 0;
    var posX_7_static = 50;
    var lineLength_7 = 500;
    var speed_7 = 1;
    
    ////////////////////////////////////////////////////////////// 8

    var ctx_8 = canvas.getContext("2d");
    ctx_8.strokeStyle = "#ffffff";
    ctx_8.lineWidth = 1;
    var posY_8 = 1300;
    var posX_8 = 100;
    var posY_8_static = 0;
    var posX_8_static = 50;
    var lineLength_8 = 500;
    var speed_8 = 1;

    ////////////////////////////////////////////////////////////// 9

    var ctx_9 = canvas.getContext("2d");
    ctx_9.strokeStyle = "#ffffff";
    ctx_9.lineWidth = 1;
    var posY_9 = 1600;
    var posX_9 = 1750;
    var posY_9_static = 0;
    var posX_9_static = 50;
    var lineLength_9 = 800;
    var speed_9 = 1;


    //////////////////////////////////////////////////////////////////////////////

    function drawLine() {

        /////////////////////////////////////////////////////////////////////////////
        ctx_1.beginPath();
        ctx_1.moveTo(posX_1, posY_1);
        ctx_1.lineTo(posX_1+lineLength_1, posY_1+lineLength_1);
        ctx_1.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_2.beginPath();
        ctx_2.moveTo(posX_2, posY_2);
        ctx_2.lineTo(posX_2+lineLength_2, posY_2+lineLength_2);
        ctx_2.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_3.beginPath();
        ctx_3.moveTo(posX_3, posY_3);
        ctx_3.lineTo(posX_3+lineLength_3, posY_3-lineLength_3);
        ctx_3.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_4.beginPath();
        ctx_4.moveTo(posX_4, posY_4);
        ctx_4.lineTo(posX_4+lineLength_4, posY_4-lineLength_4);
        ctx_4.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_5.beginPath();
        ctx_5.moveTo(posX_5, posY_5);
        ctx_5.lineTo(posX_5+lineLength_5, posY_5-lineLength_5);
        ctx_5.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_6.beginPath();
        ctx_6.moveTo(posX_6, posY_6);
        ctx_6.lineTo(posX_6-lineLength_6, posY_6-lineLength_6);
        ctx_6.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_7.beginPath();
        ctx_7.moveTo(posX_7, posY_7);
        ctx_7.lineTo(posX_7-lineLength_7, posY_7-lineLength_7);
        ctx_7.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_8.beginPath();
        ctx_8.moveTo(posX_8, posY_8);
        ctx_8.lineTo(posX_8+lineLength_8, posY_8-lineLength_8);
        ctx_8.stroke();
        /////////////////////////////////////////////////////////////////////////////
        ctx_9.beginPath();
        ctx_9.moveTo(posX_9, posY_9);
        ctx_9.lineTo(posX_9-lineLength_9, posY_9-lineLength_9);
        ctx_9.stroke();
        /////////////////////////////////////////////////////////////////////////////
        
        
        
    }
    
    function moveLine () {

        /////////////////////////////////////////////////////////////////////////////
        posY_1 += speed_1;
        posX_1 += speed_1;
        
        if ( posY_1+lineLength_1 > canvas.height - 500 ) {
            speed_1 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_2 += speed_2;
        posX_2 += speed_2;
        
        if ( posY_2+lineLength_2 > canvas.height - 560 ) {
            speed_2 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_3 -= speed_3;
        posX_3 += speed_3;
        
        if ( posY_3-lineLength_3 < canvas.height - 222 ) {
            speed_3 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_4 -= speed_4;
        posX_4 += speed_4;
        
        if ( posY_4-lineLength_4 < canvas.height - 162 ) {
            speed_4 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_5 -= speed_5;
        posX_5 += speed_5;
        
        if ( posY_5-lineLength_5 < canvas.height - 180 ) {
            speed_5 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_6 -= speed_6;
        posX_6 -= speed_6;
        
        if ( posY_6-lineLength_6 < canvas.height - 130 ) {
            speed_6 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_7 -= speed_7;
        posX_7 -= speed_7;
        
        if ( posY_7-lineLength_7 < canvas.height - 330 ) {
            speed_7 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_8 -= speed_8;
        posX_8 += speed_8;
        
        if ( posY_8-lineLength_8 < canvas.height - 280 ) {
            speed_8 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        posY_9 -= speed_9;
        posX_9 -= speed_9;
        
        if ( posY_9-lineLength_9 < canvas.height - 300 ) {
            speed_9 = 0;
        }
        /////////////////////////////////////////////////////////////////////////////
        
        
    }
    
    function loop() {
        /////////////////////////////////////////////////////////////////////////////
        ctx_1.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_2.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_3.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_4.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_5.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_6.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_7.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_8.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        ctx_9.clearRect(0,0,canvas.width, canvas.height);
        /////////////////////////////////////////////////////////////////////////////
        moveLine();
        drawLine();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);







});