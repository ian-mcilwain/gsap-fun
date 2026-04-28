const init = () => {

    let tween;

    const playMarquee = () => {

        let progress = tween ? tween.progress() : 0;
        tween && tween.progress(0).kill();
        const marquee = document.querySelector(".marqueeContent");

        const width = parseInt(
            getComputedStyle(marquee).getPropertyValue('width'),
             10
            );
    
        const distanceToMove = -1 * (width * 1.5);
    
        console.log({width, distanceToMove})
    
        tween = gsap.fromTo(
            marquee, 
            { x: 0},
            { x: distanceToMove,
            ease: "none",
            duration: 30,
            repeat: -1}
        );

        tween.progress(progress);
    }
    playMarquee();

    function debounce(func) {
        var timer;
        return function (event) {
            if (timer) clearTimeout(timer);
            timer = setTimeout(
                () => {
                    func();
                },
                100,
                event
            );
        };
    }
    window.addEventListener('resize', debounce(playMarquee));

}

document.addEventListener("DOMContentLoaded", init);