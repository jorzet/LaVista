

$(document).scroll(function() {

    var distance = $(document).scrollTop();
    console.log("Distancia: "+distance);

    var home = document.getElementById("hamburguer-menu").src;
    var more = document.getElementById("more-than-home-menu").src;
    var life = document.getElementById("live-style-menu").src;
    var map = document.getElementById("map-menu").src;
    var facebook = document.getElementById("facebook-image").src;
    var instagram = document.getElementById("instagram-image").src;

    if (distance < 350){
        home = "images/hamburguer-menu-gray.png"
        more = "images/more-than-home-gray.png"
        life = "images/life-style.png"
        map = "images/map-gray.png"
        facebook = "images/facebook-icon.png"
        instagram = "images/instagram-icon.png"
    }
    if (distance > 350 && distance < 1038 ) {
        home = "images/home-icon.png"
        more = "images/more-than-home-blue.png"
        life = "images/life-style.png"
        map = "images/map-gray.png"
        facebook = "images/facebook-icon.png"
        instagram = "images/instagram-icon.png"
    }
    if (distance > 1038 && distance < 1726) {
        home = "images/home-icon-blue.png"
        more = "images/more-than-home-blue2.png"
        life = "images/life-style-blue.png"
        map = "images/map-blue2.png"
        facebook = "images/facebook-icon-blue.png"
        instagram = "images/instagram-icon-blue.png"
    }
    if (distance > 1726 && distance < 2414) {
        home = "images/home-icon-black.png"
        more = "images/more-than-home-black.png"
        life = "images/life-style-black.png"
        map = "images/map-black.png"
        facebook = "images/facebook-icon-black.png"
        instagram = "images/instagram-icon-black.png"
    }
    if (distance > 2414 && distance < 3102) {
        home = "images/home-icon.png"
        more = "images/more-than-home-gray.png"
        life = "images/life-style-blue.png"
        map = "images/map-gray.png"
        facebook = "images/facebook-icon.png"
        instagram = "images/instagram-icon.png"
    }
    if (distance > 3102) {
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