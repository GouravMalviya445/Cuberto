Shery.mouseFollower();
Shery.hoverWithMediaCircle(".main-heading h1", {
    videos: ["./Assets/videos/0.mp4", "./Assets/videos/2.mp4", "./Assets/videos/3.mp4"]
});
Shery.makeMagnet(".magnet");

gsap.to(".fcontent .fleft-elem",{
    scrollTrigger:{
        trigger:".fcontent",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y: "-300%",
    ease: Power1
});

let sections = document.querySelectorAll(".fleft-elem");
Shery.imageEffect(".images", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

gsap.from(".home-headings>h3",{
    opacity:0,
    y:-50,
    duration:.5,
    delay:.6,
})

gsap.from(".main-heading",{
    opacity:0,
    y:-50,
    duration:.5,
    delay:1.2,
})
