
        var scrollAmount = 0;
        var counter = 0;
        var pixelsToNotify = 200;


        $(document).scroll(function() {

            var distance = $(window).scrollTop();

            if (parseInt(distance) - parseInt(scrollAmount) > parseInt(pixelsToNotify)) { // Bajada

                //scrollAmount = distance;
                counter = counter + 1;
                scrollAmount = parseInt(distance) + Number(669);
                //pixelsToNotify = Number(200) + Number(669);

                //console.log("Distancia: "+distance);
                //console.log("pixels: "+pixelsToNotify);
                //console.log("scroll: "+scrollAmount);

                if (parseInt(distance) > parseInt(200) && parseInt(distance) < parseInt(869)) {

                    document.getElementById("canvas-rombos-2").style.backgroundImage = "url('images/rombos3.gif')";

                    staticAnimation();

                    async function staticAnimation() {

                        
                        await sleep(2000);
                        document.getElementById("canvas-rombos-2").style.backgroundImage = "url('images/rombos3.png')";

                    }

                        /////////////////////////////////////////////////////////////////////////
                        var canvas = document.getElementById("canvas-2-subcontainer-2");
                        canvas.width = window.innerWidth;
                        canvas.height = window.innerHeight;

                        //console.log(canvas.width);
                        //console.log(canvas.height);

                        ////////////////////////////////////////////////////////////// 1 - 1

                        var ctx_11 = canvas.getContext("2d");
                        ctx_11.strokeStyle = "#ffffff";
                        ctx_11.lineWidth = 2;
                        var posY_11 = -250;
                        var posX_11 = 700;
                        var posY_11_static = 0;
                        var posX_11_static = 50;
                        var lineLength_11 = 250;
                        var speed_11 = 2;

                        ////////////////////////////////////////////////////////////// 2 - 1

                        var ctx_21 = canvas.getContext("2d");
                        ctx_21.strokeStyle = "#ffffff";
                        ctx_21.lineWidth = 2;
                        var posY_21 = -150;
                        var posX_21 = 750;
                        var posY_21_static = 0;
                        var posX_21_static = 50;
                        var lineLength_21 = 150;
                        var speed_21 = 2;

                        ////////////////////////////////////////////////////////////// 3 - 1

                        var ctx_31 = canvas.getContext("2d");
                        ctx_31.strokeStyle = "#ffffff";
                        ctx_31.lineWidth = 2;
                        var posY_31 = -450;
                        var posX_31 = 300;
                        var posY_31_static = 0;
                        var posX_31_static = 50;
                        var lineLength_31 = 450;
                        var speed_31 = 2;

                        ////////////////////////////////////////////////////////////// 4 - 1

                        var ctx_41 = canvas.getContext("2d");
                        ctx_41.strokeStyle = "#ffffff";
                        ctx_41.lineWidth = 2;
                        var posY_41 = -250;
                        var posX_41 = 350;
                        var posY_41_static = 0;
                        var posX_41_static = 50;
                        var lineLength_41 = 250;
                        var speed_41 = 2;

                        ////////////////////////////////////////////////////////////// 1

                        var ctx_1 = canvas.getContext("2d");
                        ctx_1.strokeStyle = "#ffffff";
                        ctx_1.lineWidth = 2;
                        var posY_1 = 800;
                        var posX_1 = -100;
                        var lineLength_1 = 130;
                        var speed_1 = 2;

                        ////////////////////////////////////////////////////////////// 2

                        var ctx_2 = canvas.getContext("2d");
                        ctx_2.strokeStyle = "#ffffff";
                        ctx_2.lineWidth = 2;
                        var posY_2 = 800;
                        var posX_2 = -70;
                        var lineLength_2 = 130;
                        var speed_2 = 2;

                        ////////////////////////////////////////////////////////////// 6

                        var ctx_6 = canvas.getContext("2d");
                        ctx_6.strokeStyle = "#ffffff";
                        ctx_6.lineWidth = 2;
                        var posY_6 = 1100;
                        var posX_6 = 1150;
                        var posY_6_static = 0;
                        var posX_6_static = 50;
                        var lineLength_6 = 300;
                        var speed_6 = 2;

                        ////////////////////////////////////////////////////////////// 7

                        var ctx_7 = canvas.getContext("2d");
                        ctx_7.strokeStyle = "#ffffff";
                        ctx_7.lineWidth = 2;
                        var posY_7 = 1300;
                        var posX_7 = 1400;
                        var posY_7_static = 0;
                        var posX_7_static = 50;
                        var lineLength_7 = 500;
                        var speed_7 = 2;

                        ////////////////////////////////////////////////////////////// 8

                        var ctx_8 = canvas.getContext("2d");
                        ctx_8.strokeStyle = "#ffffff";
                        ctx_8.lineWidth = 2;
                        var posY_8 = 1100;
                        var posX_8 = 1350;
                        var posY_8_static = 0;
                        var posX_8_static = 50;
                        var lineLength_8 = 300;
                        var speed_8 = 2;

                        ////////////////////////////////////////////////////////////// 9

                        var ctx_9 = canvas.getContext("2d");
                        ctx_9.strokeStyle = "#ffffff";
                        ctx_9.lineWidth = 2;
                        var posY_9 = 1300;
                        var posX_9 = 1800;
                        var posY_9_static = 0;
                        var posX_9_static = 50;
                        var lineLength_9 = 500;
                        var speed_9 = 2;

                        //////////////////////////////////////////////////////////////////////////////

                        function drawLine() {

                            /////////////////////////////////////////////////////////////////////////////
                            ctx_11.beginPath();
                            ctx_11.moveTo(posX_11, posY_11);
                            ctx_11.lineTo(posX_11+lineLength_11, posY_11+lineLength_11);
                            ctx_11.stroke();
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_21.beginPath();
                            ctx_21.moveTo(posX_21, posY_21);
                            ctx_21.lineTo(posX_21+lineLength_21, posY_21+lineLength_21);
                            ctx_21.stroke();
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_31.beginPath();
                            ctx_31.moveTo(posX_31, posY_31);
                            ctx_31.lineTo(posX_31+lineLength_31, posY_31+lineLength_31);
                            ctx_31.stroke();
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_41.beginPath();
                            ctx_41.moveTo(posX_41, posY_41);
                            ctx_41.lineTo(posX_41+lineLength_41, posY_41+lineLength_41);
                            ctx_41.stroke();
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_1.beginPath();
                            ctx_1.moveTo(posX_1, posY_1);
                            ctx_1.lineTo(posX_1+lineLength_1, posY_1-lineLength_1);
                            ctx_1.stroke();
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_2.beginPath();
                            ctx_2.moveTo(posX_2, posY_2);
                            ctx_2.lineTo(posX_2+lineLength_2, posY_2-lineLength_2);
                            ctx_2.stroke();
                            ////////////////////////////////////////////////////////////////////////////
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
                            ctx_8.lineTo(posX_8-lineLength_8, posY_8-lineLength_8);
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
                            posY_11 += speed_11;
                            posX_11 += speed_11;
                            
                            if ( posY_11+lineLength_11 > canvas.height - 600 ) {
                                speed_11 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                            posY_21 += speed_21;
                            posX_21 += speed_21;
                            
                            if ( posY_21+lineLength_21 > canvas.height - 700 ) {
                                speed_21 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                            posY_31 += speed_31;
                            posX_31 += speed_31;
                            
                            if ( posY_31+lineLength_31 > canvas.height - 500 ) {
                                speed_31 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                            posY_41 += speed_41;
                            posX_41 += speed_41;
                            
                            if ( posY_41+lineLength_41 > canvas.height - 600 ) {
                                speed_41 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                            posY_1 -= speed_1;
                            posX_1 += speed_1;
                            
                            if ( posY_1-lineLength_1 < canvas.height - 310 ) {
                                speed_1 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                            posY_2 -= speed_2;
                            posX_2 += speed_2;
                            
                            if ( posY_2-lineLength_2 < canvas.height - 302 ) {
                                speed_2 = 0;
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
                            
                            if ( posY_7-lineLength_7 < canvas.height - 350 ) {
                                speed_7 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                            posY_8 -= speed_8;
                            posX_8 -= speed_8;
                            
                            if ( posY_8-lineLength_8 < canvas.height - 220 ) {
                                speed_8 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                            posY_9 -= speed_9;
                            posX_9 -= speed_9;
                            
                            if ( posY_9-lineLength_9 < canvas.height - 330 ) {
                                speed_9 = 0;
                            }
                            /////////////////////////////////////////////////////////////////////////////
                        
                        }
                
                        function loop() {
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_11.clearRect(0,0,canvas.width, canvas.height);
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_21.clearRect(0,0,canvas.width, canvas.height);
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_31.clearRect(0,0,canvas.width, canvas.height);
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_41.clearRect(0,0,canvas.width, canvas.height);
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_1.clearRect(0,0,canvas.width, canvas.height);
                            /////////////////////////////////////////////////////////////////////////////
                            ctx_2.clearRect(0,0,canvas.width, canvas.height);
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

                    ///////////////////////////////////////////////////////////////////////////////////// Container 2 - 1
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-1-container-2',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-2-add-1',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-2-add-2',
                            opacity: [0, 1],
                            duration: 4000,
                            easing: "easeOutExpo",
                            delay: 4000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-2-add-3',
                            opacity: [0, 1],
                            duration: 2000,
                            easing: "easeOutExpo",
                            delay: 2000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-2-add-4',
                            opacity: [0, 1],
                            duration: 4100,
                            easing: "easeOutExpo",
                            delay: 4100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-2-add-5',
                            opacity: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            delay: 1100
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 2 - 2
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-2-container-2',
                            opacity: [0, 1],
                            duration: 3100,
                            easing: "easeOutExpo",
                            delay: 3100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-2-add-1',
                            opacity: [0, 1],
                            duration: 2100,
                            easing: "easeOutExpo",
                            delay: 2100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-2-add-2',
                            opacity: [0, 1],
                            duration: 1200,
                            easing: "easeOutExpo",
                            delay: 1200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-2-add-3',
                            opacity: [0, 1],
                            duration: 4200,
                            easing: "easeOutExpo",
                            delay: 4200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-2-add-4',
                            opacity: [0, 1],
                            duration: 2200,
                            easing: "easeOutExpo",
                            delay: 2200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-2-add-5',
                            opacity: [0, 1],
                            duration: 3200,
                            easing: "easeOutExpo",
                            delay: 3200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-2-add-6',
                            opacity: [0, 1],
                            duration: 1300,
                            easing: "easeOutExpo",
                            delay: 1300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-2-add-7',
                            opacity: [0, 1],
                            duration: 4300,
                            easing: "easeOutExpo",
                            delay: 4300
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 2 - 3
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-3-container-2',
                            opacity: [0, 1],
                            duration: 1400,
                            easing: "easeOutExpo",
                            delay: 1400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-1',
                            opacity: [0, 1],
                            duration: 3300,
                            easing: "easeOutExpo",
                            delay: 3300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-2',
                            opacity: [0, 1],
                            duration: 2300,
                            easing: "easeOutExpo",
                            delay: 2300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-3',
                            opacity: [0, 1],
                            duration: 3400,
                            easing: "easeOutExpo",
                            delay: 3400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-4',
                            opacity: [0, 1],
                            duration: 1500,
                            easing: "easeOutExpo",
                            delay: 1500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-5',
                            opacity: [0, 1],
                            duration: 4400,
                            easing: "easeOutExpo",
                            delay: 4400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-6',
                            opacity: [0, 1],
                            duration: 2400,
                            easing: "easeOutExpo",
                            delay: 2400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-7',
                            opacity: [0, 1],
                            duration: 3500,
                            easing: "easeOutExpo",
                            delay: 3500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-8',
                            opacity: [0, 1],
                            duration: 2500,
                            easing: "easeOutExpo",
                            delay: 2500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-2-add-9',
                            opacity: [0, 1],
                            duration: 4500,
                            easing: "easeOutExpo",
                            delay: 4500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#exclusivos-word h1',
                            translateX: [0, -100],
                            direction: 'alternate',
                            easing: 'linear',
                            delay: 6500
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 2 - 4
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-4-container-2',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-1',
                            opacity: [0, 1],
                            duration: 2000,
                            easing: "easeOutExpo",
                            delay: 2000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-2',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-3',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-4',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-5',
                            opacity: [0, 1],
                            duration: 4000,
                            easing: "easeOutExpo",
                            delay: 4000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-6',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-7',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-8',
                            opacity: [0, 1],
                            duration: 2000,
                            easing: "easeOutExpo",
                            delay: 2000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-9',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-2-add-10',
                            opacity: [0, 1],
                            duration: 4000,
                            easing: "easeOutExpo",
                            delay: 4000
                        });

                }
                if (parseInt(distance) > parseInt(869) && parseInt(distance) < parseInt(1538)) {

                    /////////////////////////////////////////////////////////////////////////
            var canvas = document.getElementById("canvas-3-subcontainer-5");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            console.log(canvas.width);
            console.log(canvas.height);

            ////////////////////////////////////////////////////////////// 4 - 1

            var ctx_41 = canvas.getContext("2d");
            ctx_41.strokeStyle = "#ffffff";
            ctx_41.lineWidth = 1;
            var posY_41 = -250;
            var posX_41 = 150;
            var posY_41_static = 0;
            var posX_41_static = 50;
            var lineLength_41 = 250;
            var speed_41 = 1;

            ////////////////////////////////////////////////////////////// 1

            var ctx_1 = canvas.getContext("2d");
            ctx_1.strokeStyle = "#ffffff";
            ctx_1.lineWidth = 1;
            var posY_1 = 800;
            var posX_1 = -100;
            var lineLength_1 = 130;
            var speed_1 = 1;

            ////////////////////////////////////////////////////////////// 2

            var ctx_2 = canvas.getContext("2d");
            ctx_2.strokeStyle = "#ffffff";
            ctx_2.lineWidth = 1;
            var posY_2 = 800;
            var posX_2 = -70;
            var lineLength_2 = 130;
            var speed_2 = 1;

            ////////////////////////////////////////////////////////////// 6

            var ctx_6 = canvas.getContext("2d");
            ctx_6.strokeStyle = "#ffffff";
            ctx_6.lineWidth = 1;
            var posY_6 = 1100;
            var posX_6 = 850;
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

            //////////////////////////////////////////////////////////////////////////////

            function drawLine() {

                /////////////////////////////////////////////////////////////////////////////
                ctx_41.beginPath();
                ctx_41.moveTo(posX_41, posY_41);
                ctx_41.lineTo(posX_41+lineLength_41, posY_41+lineLength_41);
                ctx_41.stroke();
                /////////////////////////////////////////////////////////////////////////////
                ctx_1.beginPath();
                ctx_1.moveTo(posX_1, posY_1);
                ctx_1.lineTo(posX_1+lineLength_1, posY_1-lineLength_1);
                ctx_1.stroke();
                /////////////////////////////////////////////////////////////////////////////
                ctx_2.beginPath();
                ctx_2.moveTo(posX_2, posY_2);
                ctx_2.lineTo(posX_2+lineLength_2, posY_2-lineLength_2);
                ctx_2.stroke();
                ////////////////////////////////////////////////////////////////////////////
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

            }
    
            function moveLine () {

                /////////////////////////////////////////////////////////////////////////////
                posY_41 += speed_41;
                posX_41 += speed_41;
                
                if ( posY_41+lineLength_41 > canvas.height - 600 ) {
                    speed_41 = 0;
                }
                /////////////////////////////////////////////////////////////////////////////
                posY_1 -= speed_1;
                posX_1 += speed_1;
                
                if ( posY_1-lineLength_1 < canvas.height - 310 ) {
                    speed_1 = 0;
                }
                /////////////////////////////////////////////////////////////////////////////
                posY_2 -= speed_2;
                posX_2 += speed_2;
                
                if ( posY_2-lineLength_2 < canvas.height - 302 ) {
                    speed_2 = 0;
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
                
                if ( posY_7-lineLength_7 < canvas.height - 350 ) {
                    speed_7 = 0;
                }
                /////////////////////////////////////////////////////////////////////////////
            
            }
    
            function loop() {
                /////////////////////////////////////////////////////////////////////////////
                ctx_41.clearRect(0,0,canvas.width, canvas.height);
                /////////////////////////////////////////////////////////////////////////////
                ctx_1.clearRect(0,0,canvas.width, canvas.height);
                /////////////////////////////////////////////////////////////////////////////
                ctx_2.clearRect(0,0,canvas.width, canvas.height);
                /////////////////////////////////////////////////////////////////////////////
                ctx_6.clearRect(0,0,canvas.width, canvas.height);
                /////////////////////////////////////////////////////////////////////////////
                ctx_7.clearRect(0,0,canvas.width, canvas.height);
                /////////////////////////////////////////////////////////////////////////////
                moveLine();
                drawLine();
                requestAnimationFrame(loop);
            }
            requestAnimationFrame(loop);

                    ///////////////////////////////////////////////////////////////////////////////////// Container 5 - 1
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-1-container-5',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-5-add-1',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-5-add-2',
                            opacity: [0, 1],
                            duration: 2000,
                            easing: "easeOutExpo",
                            delay: 2000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-5-add-3',
                            opacity: [0, 1],
                            duration: 4000,
                            easing: "easeOutExpo",
                            delay: 4000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-5-add-4',
                            opacity: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            delay: 1100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-5-add-5',
                            opacity: [0, 1],
                            duration: 3100,
                            easing: "easeOutExpo",
                            delay: 3100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-5-add-6',
                            opacity: [0, 1],
                            duration: 2100,
                            easing: "easeOutExpo",
                            delay: 2100
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 5 - 2
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-2-container-5',
                            opacity: [0, 1],
                            duration: 4200,
                            easing: "easeOutExpo",
                            delay: 4200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-1',
                            opacity: [0, 1],
                            duration: 3200,
                            easing: "easeOutExpo",
                            delay: 3200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-2',
                            opacity: [0, 1],
                            duration: 2200,
                            easing: "easeOutExpo",
                            delay: 2200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-3',
                            opacity: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            delay: 1100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-4',
                            opacity: [0, 1],
                            duration: 4300,
                            easing: "easeOutExpo",
                            delay: 4300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-5',
                            opacity: [0, 1],
                            duration: 3300,
                            easing: "easeOutExpo",
                            delay: 3300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-6',
                            opacity: [0, 1],
                            duration: 2300,
                            easing: "easeOutExpo",
                            delay: 2300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-7',
                            opacity: [0, 1],
                            duration: 1200,
                            easing: "easeOutExpo",
                            delay: 1200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-8',
                            opacity: [0, 1],
                            duration: 2400,
                            easing: "easeOutExpo",
                            delay: 2400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-9',
                            opacity: [0, 1],
                            duration: 1400,
                            easing: "easeOutExpo",
                            delay: 1400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-5-add-10',
                            opacity: [0, 1],
                            duration: 3400,
                            easing: "easeOutExpo",
                            delay: 3400
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 5 - 3
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-3-container-5',
                            opacity: [0, 1],
                            duration: 3500,
                            easing: "easeOutExpo",
                            delay: 3500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-5-add-1',
                            opacity: [0, 1],
                            duration: 2500,
                            easing: "easeOutExpo",
                            delay: 2500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-5-add-2',
                            opacity: [0, 1],
                            duration: 1500,
                            easing: "easeOutExpo",
                            delay: 1500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-5-add-3',
                            opacity: [0, 1],
                            duration: 4500,
                            easing: "easeOutExpo",
                            delay: 4500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-5-add-4',
                            opacity: [0, 1],
                            duration: 2600,
                            easing: "easeOutExpo",
                            delay: 2600
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 5 - 4
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-4-container-5',
                            opacity: [0, 1],
                            duration: 1600,
                            easing: "easeOutExpo",
                            delay: 1600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-1',
                            opacity: [0, 1],
                            duration: 4600,
                            easing: "easeOutExpo",
                            delay: 4600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-2',
                            opacity: [0, 1],
                            duration: 3600,
                            easing: "easeOutExpo",
                            delay: 3600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-3',
                            opacity: [0, 1],
                            duration: 2700,
                            easing: "easeOutExpo",
                            delay: 2700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-4',
                            opacity: [0, 1],
                            duration: 4700,
                            easing: "easeOutExpo",
                            delay: 4700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-5',
                            opacity: [0, 1],
                            duration: 1700,
                            easing: "easeOutExpo",
                            delay: 1700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-6',
                            opacity: [0, 1],
                            duration: 3700,
                            easing: "easeOutExpo",
                            delay: 3700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-7',
                            opacity: [0, 1],
                            duration: 2800,
                            easing: "easeOutExpo",
                            delay: 2800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-8',
                            opacity: [0, 1],
                            duration: 4800,
                            easing: "easeOutExpo",
                            delay: 4800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-5-add-9',
                            opacity: [0, 1],
                            duration: 1800,
                            easing: "easeOutExpo",
                            delay: 1800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#livenza-word h1',
                            translateX: [0, 100],
                            direction: 'alternate',
                            easing: 'linear',
                            delay: 6500
                        });

                }
                if (parseInt(distance) > parseInt(1538) && parseInt(distance) < parseInt(2207)) {

                    /////////////////////////////////////////////////////////////////////////
                    var canvas = document.getElementById("canvas-3-subcontainer-6");
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;

                    //console.log(canvas.width);
                    //console.log(canvas.height);

                    ////////////////////////////////////////////////////////////// 1 - 1

                    var ctx_11 = canvas.getContext("2d");
                    ctx_11.strokeStyle = "#ffffff";
                    ctx_11.lineWidth = 2;
                    var posY_11 = -250;
                    var posX_11 = 800;
                    var posY_11_static = 0;
                    var posX_11_static = 50;
                    var lineLength_11 = 250;
                    var speed_11 = 1;

                    ////////////////////////////////////////////////////////////// 2 - 1

                    var ctx_21 = canvas.getContext("2d");
                    ctx_21.strokeStyle = "#ffffff";
                    ctx_21.lineWidth = 2;
                    var posY_21 = -150;
                    var posX_21 = 850;
                    var posY_21_static = 0;
                    var posX_21_static = 50;
                    var lineLength_21 = 150;
                    var speed_21 = 1;

                    ////////////////////////////////////////////////////////////// 4 - 1

                    var ctx_41 = canvas.getContext("2d");
                    ctx_41.strokeStyle = "#ffffff";
                    ctx_41.lineWidth = 2;
                    var posY_41 = -250;
                    var posX_41 = 550;
                    var posY_41_static = 0;
                    var posX_41_static = 50;
                    var lineLength_41 = 450;
                    var speed_41 = 1;

                    ////////////////////////////////////////////////////////////// 6

                    var ctx_6 = canvas.getContext("2d");
                    ctx_6.strokeStyle = "#ffffff";
                    ctx_6.lineWidth = 2;
                    var posY_6 = 1100;
                    var posX_6 = 1350;
                    var posY_6_static = 0;
                    var posX_6_static = 50;
                    var lineLength_6 = 300;
                    var speed_6 = 1;

                    ////////////////////////////////////////////////////////////// 7

                    var ctx_7 = canvas.getContext("2d");
                    ctx_7.strokeStyle = "#ffffff";
                    ctx_7.lineWidth = 2;
                    var posY_7 = 1300;
                    var posX_7 = 1600;
                    var posY_7_static = 0;
                    var posX_7_static = 50;
                    var lineLength_7 = 500;
                    var speed_7 = 1;

                    ////////////////////////////////////////////////////////////// 9

                    var ctx_9 = canvas.getContext("2d");
                    ctx_9.strokeStyle = "#ffffff";
                    ctx_9.lineWidth = 2;
                    var posY_9 = 1300;
                    var posX_9 = 1900;
                    var posY_9_static = 0;
                    var posX_9_static = 50;
                    var lineLength_9 = 500;
                    var speed_9 = 1;

                    ////////////////////////////////////////////////////////////// 8

                    var ctx_8 = canvas.getContext("2d");
                    ctx_8.strokeStyle = "#ffffff";
                    ctx_8.lineWidth = 1;
                    var posY_8 = 1300;
                    var posX_8 = 400;
                    var posY_8_static = 0;
                    var posX_8_static = 50;
                    var lineLength_8 = 500;
                    var speed_8 = 1;

                    //////////////////////////////////////////////////////////////////////////////

                    function drawLine() {

                        /////////////////////////////////////////////////////////////////////////////
                        ctx_11.beginPath();
                        ctx_11.moveTo(posX_11, posY_11);
                        ctx_11.lineTo(posX_11+lineLength_11, posY_11+lineLength_11);
                        ctx_11.stroke();
                        /////////////////////////////////////////////////////////////////////////////
                        ctx_21.beginPath();
                        ctx_21.moveTo(posX_21, posY_21);
                        ctx_21.lineTo(posX_21+lineLength_21, posY_21+lineLength_21);
                        ctx_21.stroke();
                        /////////////////////////////////////////////////////////////////////////////
                        ctx_41.beginPath();
                        ctx_41.moveTo(posX_41, posY_41);
                        ctx_41.lineTo(posX_41+lineLength_41, posY_41+lineLength_41);
                        ctx_41.stroke();
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
                        posY_11 += speed_11;
                        posX_11 += speed_11;
                        
                        if ( posY_11+lineLength_11 > canvas.height - 600 ) {
                            speed_11 = 0;
                        }
                        /////////////////////////////////////////////////////////////////////////////
                        posY_21 += speed_21;
                        posX_21 += speed_21;
                        
                        if ( posY_21+lineLength_21 > canvas.height - 700 ) {
                            speed_21 = 0;
                        }
                        /////////////////////////////////////////////////////////////////////////////
                        posY_41 += speed_41;
                        posX_41 += speed_41;
                        
                        if ( posY_41+lineLength_41 > canvas.height - 500 ) {
                            speed_41 = 0;
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
                        
                        if ( posY_7-lineLength_7 < canvas.height - 250 ) {
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
                        
                        if ( posY_9-lineLength_9 < canvas.height - 130 ) {
                            speed_9 = 0;
                        }
                        /////////////////////////////////////////////////////////////////////////////
                    
                    }
            
                    function loop() {
                        /////////////////////////////////////////////////////////////////////////////
                        ctx_11.clearRect(0,0,canvas.width, canvas.height);
                        /////////////////////////////////////////////////////////////////////////////
                        ctx_21.clearRect(0,0,canvas.width, canvas.height);
                        /////////////////////////////////////////////////////////////////////////////
                        ctx_41.clearRect(0,0,canvas.width, canvas.height);
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

                    ///////////////////////////////////////////////////////////////////////////////////// Container 6 - 1
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-1-container-6',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-6-add-1',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-6-add-2',
                            opacity: [0, 1],
                            duration: 2000,
                            easing: "easeOutExpo",
                            delay: 2000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-6-add-3',
                            opacity: [0, 1],
                            duration: 4000,
                            easing: "easeOutExpo",
                            delay: 4000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-6-add-4',
                            opacity: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            delay: 1100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-6-add-5',
                            opacity: [0, 1],
                            duration: 3100,
                            easing: "easeOutExpo",
                            delay: 3100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-6-add-6',
                            opacity: [0, 1],
                            duration: 2100,
                            easing: "easeOutExpo",
                            delay: 2100
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 6 - 2
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-2-container-6',
                            opacity: [0, 1],
                            duration: 4200,
                            easing: "easeOutExpo",
                            delay: 4200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-1',
                            opacity: [0, 1],
                            duration: 3200,
                            easing: "easeOutExpo",
                            delay: 3200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-2',
                            opacity: [0, 1],
                            duration: 2200,
                            easing: "easeOutExpo",
                            delay: 2200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-3',
                            opacity: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            delay: 1100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-4',
                            opacity: [0, 1],
                            duration: 4300,
                            easing: "easeOutExpo",
                            delay: 4300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-5',
                            opacity: [0, 1],
                            duration: 3300,
                            easing: "easeOutExpo",
                            delay: 3300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-6',
                            opacity: [0, 1],
                            duration: 2300,
                            easing: "easeOutExpo",
                            delay: 2300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-7',
                            opacity: [0, 1],
                            duration: 1200,
                            easing: "easeOutExpo",
                            delay: 1200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-8',
                            opacity: [0, 1],
                            duration: 2400,
                            easing: "easeOutExpo",
                            delay: 2400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-9',
                            opacity: [0, 1],
                            duration: 1400,
                            easing: "easeOutExpo",
                            delay: 1400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-6-add-10',
                            opacity: [0, 1],
                            duration: 3400,
                            easing: "easeOutExpo",
                            delay: 3400
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 6 - 3
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-3-container-6',
                            opacity: [0, 1],
                            duration: 3500,
                            easing: "easeOutExpo",
                            delay: 3500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-6-add-1',
                            opacity: [0, 1],
                            duration: 2500,
                            easing: "easeOutExpo",
                            delay: 2500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-6-add-2',
                            opacity: [0, 1],
                            duration: 1500,
                            easing: "easeOutExpo",
                            delay: 1500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-6-add-3',
                            opacity: [0, 1],
                            duration: 4500,
                            easing: "easeOutExpo",
                            delay: 4500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-6-add-4',
                            opacity: [0, 1],
                            duration: 2600,
                            easing: "easeOutExpo",
                            delay: 2600
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 6 - 4
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-4-container-6',
                            opacity: [0, 1],
                            duration: 1600,
                            easing: "easeOutExpo",
                            delay: 1600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-1',
                            opacity: [0, 1],
                            duration: 4600,
                            easing: "easeOutExpo",
                            delay: 4600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-2',
                            opacity: [0, 1],
                            duration: 3600,
                            easing: "easeOutExpo",
                            delay: 3600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-3',
                            opacity: [0, 1],
                            duration: 2700,
                            easing: "easeOutExpo",
                            delay: 2700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-4',
                            opacity: [0, 1],
                            duration: 4700,
                            easing: "easeOutExpo",
                            delay: 4700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-5',
                            opacity: [0, 1],
                            duration: 1700,
                            easing: "easeOutExpo",
                            delay: 1700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-6',
                            opacity: [0, 1],
                            duration: 3700,
                            easing: "easeOutExpo",
                            delay: 3700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-7',
                            opacity: [0, 1],
                            duration: 2800,
                            easing: "easeOutExpo",
                            delay: 2800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-8',
                            opacity: [0, 1],
                            duration: 4800,
                            easing: "easeOutExpo",
                            delay: 4800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-6-add-9',
                            opacity: [0, 1],
                            duration: 1800,
                            easing: "easeOutExpo",
                            delay: 1800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#rivalta-word h1',
                            translateX: [0, 100],
                            direction: 'alternate',
                            easing: 'linear',
                            delay: 6500
                        });

                }
                if (parseInt(distance) > parseInt(2207) && parseInt(distance) < parseInt(2876)) {

                    document.getElementById("canvas-rombos").style.backgroundImage = "url('images/amenidades3.gif')";

                    staticAnimation();

                    async function staticAnimation() {

                        
                        await sleep(3000);
                        document.getElementById("canvas-rombos").style.backgroundImage = "url('images/amenidades3-static.png')";

                }

                /////////////////////////////////////////////////////////////////////////
                var canvas = document.getElementById("canvas-3-subcontainer-3");
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                //console.log(canvas.width);
                //console.log(canvas.height);

                ////////////////////////////////////////////////////////////// 1 - 1

                var ctx_11 = canvas.getContext("2d");
                ctx_11.strokeStyle = "#ffffff";
                ctx_11.lineWidth = 2;
                var posY_11 = -250;
                var posX_11 = 800;
                var posY_11_static = 0;
                var posX_11_static = 50;
                var lineLength_11 = 250;
                var speed_11 = 2;

                ////////////////////////////////////////////////////////////// 2 - 1

                var ctx_21 = canvas.getContext("2d");
                ctx_21.strokeStyle = "#ffffff";
                ctx_21.lineWidth = 2;
                var posY_21 = -150;
                var posX_21 = 850;
                var posY_21_static = 0;
                var posX_21_static = 50;
                var lineLength_21 = 150;
                var speed_21 = 2;

                ////////////////////////////////////////////////////////////// 4 - 1

                var ctx_41 = canvas.getContext("2d");
                ctx_41.strokeStyle = "#ffffff";
                ctx_41.lineWidth = 2;
                var posY_41 = -250;
                var posX_41 = 350;
                var posY_41_static = 0;
                var posX_41_static = 50;
                var lineLength_41 = 250;
                var speed_41 = 2;

                ////////////////////////////////////////////////////////////// 1

                var ctx_1 = canvas.getContext("2d");
                ctx_1.strokeStyle = "#ffffff";
                ctx_1.lineWidth = 2;
                var posY_1 = 800;
                var posX_1 = -100;
                var lineLength_1 = 130;
                var speed_1 = 2;

                ////////////////////////////////////////////////////////////// 2

                var ctx_2 = canvas.getContext("2d");
                ctx_2.strokeStyle = "#ffffff";
                ctx_2.lineWidth = 2;
                var posY_2 = 800;
                var posX_2 = -70;
                var lineLength_2 = 130;
                var speed_2 = 2;

                ////////////////////////////////////////////////////////////// 6

                var ctx_6 = canvas.getContext("2d");
                ctx_6.strokeStyle = "#ffffff";
                ctx_6.lineWidth = 2;
                var posY_6 = 1100;
                var posX_6 = 1150;
                var posY_6_static = 0;
                var posX_6_static = 50;
                var lineLength_6 = 300;
                var speed_6 = 2;

                ////////////////////////////////////////////////////////////// 7

                var ctx_7 = canvas.getContext("2d");
                ctx_7.strokeStyle = "#ffffff";
                ctx_7.lineWidth = 2;
                var posY_7 = 1300;
                var posX_7 = 1400;
                var posY_7_static = 0;
                var posX_7_static = 50;
                var lineLength_7 = 500;
                var speed_7 = 2;

                ////////////////////////////////////////////////////////////// 8

                var ctx_8 = canvas.getContext("2d");
                ctx_8.strokeStyle = "#ffffff";
                ctx_8.lineWidth = 2;
                var posY_8 = 1100;
                var posX_8 = 1350;
                var posY_8_static = 0;
                var posX_8_static = 50;
                var lineLength_8 = 300;
                var speed_8 = 2;

                ////////////////////////////////////////////////////////////// 9

                var ctx_9 = canvas.getContext("2d");
                ctx_9.strokeStyle = "#ffffff";
                ctx_9.lineWidth = 2;
                var posY_9 = 1300;
                var posX_9 = 1900;
                var posY_9_static = 0;
                var posX_9_static = 50;
                var lineLength_9 = 500;
                var speed_9 = 2;

                //////////////////////////////////////////////////////////////////////////////

                function drawLine() {

                    /////////////////////////////////////////////////////////////////////////////
                    ctx_11.beginPath();
                    ctx_11.moveTo(posX_11, posY_11);
                    ctx_11.lineTo(posX_11+lineLength_11, posY_11+lineLength_11);
                    ctx_11.stroke();
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_21.beginPath();
                    ctx_21.moveTo(posX_21, posY_21);
                    ctx_21.lineTo(posX_21+lineLength_21, posY_21+lineLength_21);
                    ctx_21.stroke();
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_41.beginPath();
                    ctx_41.moveTo(posX_41, posY_41);
                    ctx_41.lineTo(posX_41+lineLength_41, posY_41+lineLength_41);
                    ctx_41.stroke();
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_1.beginPath();
                    ctx_1.moveTo(posX_1, posY_1);
                    ctx_1.lineTo(posX_1+lineLength_1, posY_1-lineLength_1);
                    ctx_1.stroke();
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_2.beginPath();
                    ctx_2.moveTo(posX_2, posY_2);
                    ctx_2.lineTo(posX_2+lineLength_2, posY_2-lineLength_2);
                    ctx_2.stroke();
                    ////////////////////////////////////////////////////////////////////////////
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
                    ctx_8.lineTo(posX_8-lineLength_8, posY_8-lineLength_8);
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
                    posY_11 += speed_11;
                    posX_11 += speed_11;
                    
                    if ( posY_11+lineLength_11 > canvas.height - 600 ) {
                        speed_11 = 0;
                    }
                    /////////////////////////////////////////////////////////////////////////////
                    posY_21 += speed_21;
                    posX_21 += speed_21;
                    
                    if ( posY_21+lineLength_21 > canvas.height - 700 ) {
                        speed_21 = 0;
                    }
                    /////////////////////////////////////////////////////////////////////////////
                    posY_41 += speed_41;
                    posX_41 += speed_41;
                    
                    if ( posY_41+lineLength_41 > canvas.height - 500 ) {
                        speed_41 = 0;
                    }
                    /////////////////////////////////////////////////////////////////////////////
                    posY_1 -= speed_1;
                    posX_1 += speed_1;
                    
                    if ( posY_1-lineLength_1 < canvas.height - 310 ) {
                        speed_1 = 0;
                    }
                    /////////////////////////////////////////////////////////////////////////////
                    posY_2 -= speed_2;
                    posX_2 += speed_2;
                    
                    if ( posY_2-lineLength_2 < canvas.height - 302 ) {
                        speed_2 = 0;
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
                    
                    if ( posY_7-lineLength_7 < canvas.height - 350 ) {
                        speed_7 = 0;
                    }
                    /////////////////////////////////////////////////////////////////////////////
                    posY_8 -= speed_8;
                    posX_8 -= speed_8;
                    
                    if ( posY_8-lineLength_8 < canvas.height - 220 ) {
                        speed_8 = 0;
                    }
                    /////////////////////////////////////////////////////////////////////////////
                    posY_9 -= speed_9;
                    posX_9 -= speed_9;
                    
                    if ( posY_9-lineLength_9 < canvas.height - 130 ) {
                        speed_9 = 0;
                    }
                    /////////////////////////////////////////////////////////////////////////////
                
                }
        
                function loop() {
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_11.clearRect(0,0,canvas.width, canvas.height);
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_21.clearRect(0,0,canvas.width, canvas.height);
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_41.clearRect(0,0,canvas.width, canvas.height);
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_1.clearRect(0,0,canvas.width, canvas.height);
                    /////////////////////////////////////////////////////////////////////////////
                    ctx_2.clearRect(0,0,canvas.width, canvas.height);
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

                    ///////////////////////////////////////////////////////////////////////////////////// Container 3 - 1
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-1-container-3',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-1',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-2',
                            opacity: [0, 1],
                            duration: 2000,
                            easing: "easeOutExpo",
                            delay: 2000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-3',
                            opacity: [0, 1],
                            duration: 4000,
                            easing: "easeOutExpo",
                            delay: 4000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-4',
                            opacity: [0, 1],
                            duration: 4100,
                            easing: "easeOutExpo",
                            delay: 4100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-5',
                            opacity: [0, 1],
                            duration: 3100,
                            easing: "easeOutExpo",
                            delay: 3100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-6',
                            opacity: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            delay: 1100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-7',
                            opacity: [0, 1],
                            duration: 2100,
                            easing: "easeOutExpo",
                            delay: 2100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-8',
                            opacity: [0, 1],
                            duration: 4200,
                            easing: "easeOutExpo",
                            delay: 4200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-3-add-9',
                            opacity: [0, 1],
                            duration: 3200,
                            easing: "easeOutExpo",
                            delay: 3200
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 3 - 2
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-2-container-3',
                            opacity: [0, 1],
                            duration: 3300,
                            easing: "easeOutExpo",
                            delay: 3300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-1',
                            opacity: [0, 1],
                            duration: 2200,
                            easing: "easeOutExpo",
                            delay: 2200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-2',
                            opacity: [0, 1],
                            duration: 1200,
                            easing: "easeOutExpo",
                            delay: 1200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-3',
                            opacity: [0, 1],
                            duration: 4300,
                            easing: "easeOutExpo",
                            delay: 4300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-4',
                            opacity: [0, 1],
                            duration: 2300,
                            easing: "easeOutExpo",
                            delay: 2300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-5',
                            opacity: [0, 1],
                            duration: 3400,
                            easing: "easeOutExpo",
                            delay: 3400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-6',
                            opacity: [0, 1],
                            duration: 1300,
                            easing: "easeOutExpo",
                            delay: 1300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-7',
                            opacity: [0, 1],
                            duration: 4400,
                            easing: "easeOutExpo",
                            delay: 4400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-8',
                            opacity: [0, 1],
                            duration: 2400,
                            easing: "easeOutExpo",
                            delay: 2400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-3-add-9',
                            opacity: [0, 1],
                            duration: 1400,
                            easing: "easeOutExpo",
                            delay: 1400
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 3 - 3
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-3-container-3',
                            opacity: [0, 1],
                            duration: 2500,
                            easing: "easeOutExpo",
                            delay: 2500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-1',
                            opacity: [0, 1],
                            duration: 1500,
                            easing: "easeOutExpo",
                            delay: 1500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-2',
                            opacity: [0, 1],
                            duration: 3500,
                            easing: "easeOutExpo",
                            delay: 3500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-3',
                            opacity: [0, 1],
                            duration: 1600,
                            easing: "easeOutExpo",
                            delay: 1600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-4',
                            opacity: [0, 1],
                            duration: 4500,
                            easing: "easeOutExpo",
                            delay: 4500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-5',
                            opacity: [0, 1],
                            duration: 2600,
                            easing: "easeOutExpo",
                            delay: 2600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-6',
                            opacity: [0, 1],
                            duration: 3600,
                            easing: "easeOutExpo",
                            delay: 3600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-7',
                            opacity: [0, 1],
                            duration: 4600,
                            easing: "easeOutExpo",
                            delay: 4600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-8',
                            opacity: [0, 1],
                            duration: 1700,
                            easing: "easeOutExpo",
                            delay: 1700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-9',
                            opacity: [0, 1],
                            duration: 3700,
                            easing: "easeOutExpo",
                            delay: 3700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-3-add-10',
                            opacity: [0, 1],
                            duration: 4700,
                            easing: "easeOutExpo",
                            delay: 4700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#actividades-word h1',
                            translateX: [0, -60],
                            direction: 'alternate',
                            easing: 'linear',
                            delay: 6500
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 3 - 4
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-4-container-3',
                            opacity: [0, 1],
                            duration: 1800,
                            easing: "easeOutExpo",
                            delay: 1800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-1',
                            opacity: [0, 1],
                            duration: 4800,
                            easing: "easeOutExpo",
                            delay: 4800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-2',
                            opacity: [0, 1],
                            duration: 3800,
                            easing: "easeOutExpo",
                            delay: 3800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-3',
                            opacity: [0, 1],
                            duration: 2700,
                            easing: "easeOutExpo",
                            delay: 2700
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-4',
                            opacity: [0, 1],
                            duration: 1900,
                            easing: "easeOutExpo",
                            delay: 1900
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-5',
                            opacity: [0, 1],
                            duration: 3900,
                            easing: "easeOutExpo",
                            delay: 3900
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-6',
                            opacity: [0, 1],
                            duration: 2800,
                            easing: "easeOutExpo",
                            delay: 2800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-7',
                            opacity: [0, 1],
                            duration: 3050,
                            easing: "easeOutExpo",
                            delay: 3050
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-8',
                            opacity: [0, 1],
                            duration: 1050,
                            easing: "easeOutExpo",
                            delay: 1050
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-9',
                            opacity: [0, 1],
                            duration: 4050,
                            easing: "easeOutExpo",
                            delay: 4050
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-3-add-10',
                            opacity: [0, 1],
                            duration: 2900,
                            easing: "easeOutExpo",
                            delay: 2900
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 3 - 5
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-5-container-3',
                            opacity: [0, 1],
                            duration: 3550,
                            easing: "easeOutExpo",
                            delay: 3550
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-1',
                            opacity: [0, 1],
                            duration: 2550,
                            easing: "easeOutExpo",
                            delay: 2550
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-2',
                            opacity: [0, 1],
                            duration: 1550,
                            easing: "easeOutExpo",
                            delay: 1550
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-3',
                            opacity: [0, 1],
                            duration: 4550,
                            easing: "easeOutExpo",
                            delay: 4550
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-4',
                            opacity: [0, 1],
                            duration: 3500,
                            easing: "easeOutExpo",
                            delay: 3500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-5',
                            opacity: [0, 1],
                            duration: 1800,
                            easing: "easeOutExpo",
                            delay: 1800
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-6',
                            opacity: [0, 1],
                            duration: 4350,
                            easing: "easeOutExpo",
                            delay: 4350
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-7',
                            opacity: [0, 1],
                            duration: 1450,
                            easing: "easeOutExpo",
                            delay: 1450
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-8',
                            opacity: [0, 1],
                            duration: 2890,
                            easing: "easeOutExpo",
                            delay: 2890
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-5-container-3-add-9',
                            opacity: [0, 1],
                            duration: 4150,
                            easing: "easeOutExpo",
                            delay: 4150
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 3 - 6
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-6-container-3',
                            opacity: [0, 1],
                            duration: 2350,
                            easing: "easeOutExpo",
                            delay: 2350
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-1',
                            opacity: [0, 1],
                            duration: 4850,
                            easing: "easeOutExpo",
                            delay: 4850
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-2',
                            opacity: [0, 1],
                            duration: 3450,
                            easing: "easeOutExpo",
                            delay: 3450
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-3',
                            opacity: [0, 1],
                            duration: 1960,
                            easing: "easeOutExpo",
                            delay: 1960
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-4',
                            opacity: [0, 1],
                            duration: 4780,
                            easing: "easeOutExpo",
                            delay: 4780
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-5',
                            opacity: [0, 1],
                            duration: 3340,
                            easing: "easeOutExpo",
                            delay: 3340
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-6',
                            opacity: [0, 1],
                            duration: 1230,
                            easing: "easeOutExpo",
                            delay: 1230
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-7',
                            opacity: [0, 1],
                            duration: 2560,
                            easing: "easeOutExpo",
                            delay: 2560
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-8',
                            opacity: [0, 1],
                            duration: 3780,
                            easing: "easeOutExpo",
                            delay: 3780
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-6-container-3-add-9',
                            opacity: [0, 1],
                            duration: 2980,
                            easing: "easeOutExpo",
                            delay: 2980
                        });

                }
                if (parseInt(distance) > parseInt(2876)) {






                    ///////////////////////////////////////////////////////////////////////////////////// Container 4 - 1
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-1-container-4',
                            opacity: [0, 1],
                            duration: 1000,
                            easing: "easeOutExpo",
                            delay: 1000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-4-add-1',
                            opacity: [0, 1],
                            duration: 3000,
                            easing: "easeOutExpo",
                            delay: 3000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-4-add-2',
                            opacity: [0, 1],
                            duration: 2000,
                            easing: "easeOutExpo",
                            delay: 2000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-4-add-3',
                            opacity: [0, 1],
                            duration: 4000,
                            easing: "easeOutExpo",
                            delay: 4000
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-4-add-4',
                            opacity: [0, 1],
                            duration: 2100,
                            easing: "easeOutExpo",
                            delay: 2100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-4-add-5',
                            opacity: [0, 1],
                            duration: 1100,
                            easing: "easeOutExpo",
                            delay: 1100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-1-container-4-add-6',
                            opacity: [0, 1],
                            duration: 2200,
                            easing: "easeOutExpo",
                            delay: 2200
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 4 - 2
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-2-container-4',
                            opacity: [0, 1],
                            duration: 3100,
                            easing: "easeOutExpo",
                            delay: 3100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-4-add-1',
                            opacity: [0, 1],
                            duration: 1200,
                            easing: "easeOutExpo",
                            delay: 1200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-4-add-2',
                            opacity: [0, 1],
                            duration: 2300,
                            easing: "easeOutExpo",
                            delay: 2300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-4-add-3',
                            opacity: [0, 1],
                            duration: 4100,
                            easing: "easeOutExpo",
                            delay: 4100
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-2-container-4-add-4',
                            opacity: [0, 1],
                            duration: 2400,
                            easing: "easeOutExpo",
                            delay: 2400
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#hogar-word h1',
                            translateX: [0, -200],
                            direction: 'alternate',
                            easing: 'linear',
                            delay: 6500
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 4 - 3
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-3-container-4',
                            opacity: [0, 1],
                            duration: 3300,
                            easing: "easeOutExpo",
                            delay: 3300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-4-add-1',
                            opacity: [0, 1],
                            duration: 4200,
                            easing: "easeOutExpo",
                            delay: 4200
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-4-add-2',
                            opacity: [0, 1],
                            duration: 1300,
                            easing: "easeOutExpo",
                            delay: 1300
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-3-container-4-add-3',
                            opacity: [0, 1],
                            duration: 1900,
                            easing: "easeOutExpo",
                            delay: 1900
                        });
                    ///////////////////////////////////////////////////////////////////////////////////// Container 4 - 4
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '.text-4-container-4',
                            opacity: [0, 1],
                            duration: 4500,
                            easing: "easeOutExpo",
                            delay: 4500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-4-add-1',
                            opacity: [0, 1],
                            duration: 3500,
                            easing: "easeOutExpo",
                            delay: 3500
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-4-add-2',
                            opacity: [0, 1],
                            duration: 2600,
                            easing: "easeOutExpo",
                            delay: 2600
                        });
                    anime.timeline({
                            loop: false
                        })
                        .add({
                            targets: '#text-4-container-4-add-3',
                            opacity: [0, 1],
                            duration: 4700,
                            easing: "easeOutExpo",
                            delay: 4700
                        });

                }

            }

        });