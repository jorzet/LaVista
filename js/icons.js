/*var width = window.innerWidth;
var height = window.innerHeight;
console.log("Height: "+height);*/

$(document).scroll(function() {

    var distance = $(document).scrollTop();
    console.log("Distancia: "+distance);
    var height = window.innerHeight;
    console.log("Height: "+height);

    var home = document.getElementById("hamburguer-menu").src;
    var more = document.getElementById("more-than-home-menu").src;
    var life = document.getElementById("live-style-menu").src;
    var map = document.getElementById("map-menu").src;
    var facebook = document.getElementById("facebook-image").src;
    var instagram = document.getElementById("instagram-image").src;

    if (distance < height * 0.9){
        home = "images/hamburguer-menu-gray.png"
        more = "images/more-than-home-gray.png"
        life = "images/life-style.png"
        map = "images/map-gray.png"
        facebook = "images/facebook-icon.png"
        instagram = "images/instagram-icon.png"
    }
    if (distance > height * 0.9 && distance < height * 1.9 ) {
        home = "images/home-icon.png"
        more = "images/more-than-home-blue.png"
        life = "images/life-style.png"
        map = "images/map-gray.png"
        facebook = "images/facebook-icon.png"
        instagram = "images/instagram-icon.png"

        document.getElementById("canvas-rombos-2").style.backgroundImage = "url('images/rombos3.gif')";
        staticAnimation();
        async function staticAnimation() {
            await sleep(2000);
            document.getElementById("canvas-rombos-2").style.backgroundImage = "url('images/rombos3.png')";
        }

    }
    if (distance > height * 1.9 && distance < height * 2.9 ) {
        home = "images/home-icon-blue.png"
        more = "images/more-than-home-blue2.png"
        life = "images/life-style-blue.png"
        map = "images/map-blue2.png"
        facebook = "images/facebook-icon-blue.png"
        instagram = "images/instagram-icon-blue.png"
    }
    if (distance > height * 2.9 && distance < height * 3.9 ) {
        home = "images/home-icon-black.png"
        more = "images/more-than-home-black.png"
        life = "images/life-style-black.png"
        map = "images/map-black.png"
        facebook = "images/facebook-icon-black.png"
        instagram = "images/instagram-icon-black.png"
    }
    if (distance > height * 3.9 && distance < height * 4.9 ) {
        home = "images/home-icon.png"
        more = "images/more-than-home-gray.png"
        life = "images/life-style-blue.png"
        map = "images/map-gray.png"
        facebook = "images/facebook-icon.png"
        instagram = "images/instagram-icon.png"

        document.getElementById("canvas-rombos").style.backgroundImage = "url('images/amenidades3.gif')";
        staticAnimation();

        async function staticAnimation() {
            await sleep(3000);
            document.getElementById("canvas-rombos").style.backgroundImage = "url('images/amenidades3-static.png')";
        }

    }
    if (distance > height * 4.9 ) {
        home = "images/home-icon.png"
        more = "images/more-than-home-gray.png"
        life = "images/life-style.png"
        map = "images/map-blue.png"
        facebook = "images/facebook-icon.png"
        instagram = "images/instagram-icon.png"
    }
    
    /*if (distance > 200) {
       newImageUrl = "img2.jpg"
    }
    if (distance > 300) {
       newImageUrl = "img3.jpg"
    }*/

    document.getElementById("hamburguer-menu").src = home
    document.getElementById("more-than-home-menu").src = more
    document.getElementById("live-style-menu").src = life
    document.getElementById("map-menu").src = map
    document.getElementById("facebook-image").src = facebook
    document.getElementById("instagram-image").src = instagram

});

document.getElementById("all-menu-container-id").style.backgroundColor = 'transparent';
