var tl = gsap.timeline(); {
    tl.from("#nav", {
        x: -800,
        durationIn: 2,
        delay: 1,
        scale: 0,
        opacity: 0

    })
    tl.from("#heading, #down", {
        y: -100,
        durationIn: 2,
        opacity: 0,
        scale: 1,
        stagger: 0.8,
    })
    tl.from(" #scroll", {
        y: 25,
        duration: 0.8,
        repeat: -1,
        yoyo: true
    })
    tl.from("#main #hero", {
        y: 100,
        durationIn: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "#hero img",
            scroller: "body",
            start: "top 65%",
            end: "top 35%",

        }
    })

    tl.from("#about #h1left", {
        x: 400,
        durationIn: 2,
        opacity: 0,
        scale: 0,
        scrollTrigger: {
            trigger: "#h1left h1",
            scroller: "body",

            start: "top 35%",
            end: "top 100%",



        }

    })

    tl.from("#exp", {
        y: 100,
        durationIn: 5,

        opacity: 0
    })

    tl.from("#project", {
        y: -100,
        durationIn: 5,

        opacity: 0,
    })
}

