$(document).ready(function(){
    var controller = new ScrollMagic.Controller();

    var tween0 = TweenMax.to("body", 0.5, {
        backgroundColor: "white"
    })

    var scene = new ScrollMagic.Scene({
        triggerElement: "#trigger0",
        duration: 300
    })
    .setTween(tween0)
    .setPin("#pin0")
    .addIndicators({name: "2 (duration: 0)"})
    .addTo(controller);
});