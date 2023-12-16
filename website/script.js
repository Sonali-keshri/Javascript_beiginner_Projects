const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function resizeingCircle() {

    let xScale = 1;
    let yScale = 1;

    let xPrev = 0;
    let yPrev = 0;

    
    window.addEventListener('mousemove', function (dets) {
        let diffX = dets.clientX - xPrev;
        let diffY = dets.clientY - yPrev;
        
        xScale = gsap.utils.clamp(0.8, 1.2, diffX);
        yScale = gsap.utils.clamp(0.8, 1.2, diffY);

        xPrev = dets.clientX
        yPrev = dets.clientY
        
        mouseFollower(xScale, yScale);
    })
    
}

resizeingCircle();

function mouseFollower(xScale, yScale) {
    window.addEventListener('mousemove', function (dets) {
        document.querySelector('#mini_circle').style.transform = ` translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale}) )`
    })
}

function heroPage() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to('.bounding_elem', {
            y: 0,
            duration: 2,
            ease: Expo.easeInOut,
            stagger: .2,
            delay: -1
        })
        .from("#hero_footer", {
            y: -10,
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}
mouseFollower();
heroPage()