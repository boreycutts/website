$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: '#page0',
        duration: 300
    })
    .setClassToggle('#page0', 'fade-in')
    .addTo(controller);
});