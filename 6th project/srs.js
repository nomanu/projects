
var fl = gsap.timeline();
fl.from("nav",{
    y:-100,
    duration:2,
    

})
fl.from("#part-1",{
    y:100,
    duration:1  ,
    scale:0
})

fl.from("#part-1 h3",{
    y: 25,
    duration: 0.8,
    repeat: -1,
    yoyo: true
})

let tl = gsap.timeline({

    scrollTrigger: {
        trigger: "#part-2",
        start: "0% 50%",
        end: "50% 50%",
        scrub: 1,

    },
});


tl.to("#imgcntr3", {
    bottom: "5vh",
})

.to("#img2, #img4", {
    bottom: "-10vh",

})

.to("#img1, #img5", {
    bottom: "-20vh",

});


