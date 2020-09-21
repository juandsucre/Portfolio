
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLink');
    const navLinks = nav.querySelectorAll('.navLink li');
    const span = document.querySelectorAll('span');

    burger.addEventListener('click', () =>{

        nav.classList.toggle('open');

        navLinks.forEach((link, index) => {
            
            if(link.style.animation){
                link.style.animation =  '';
            }else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                
            }
        });
        // //animacion
         burger.classList.toggle('toggle');
    });


    function hola(){
        span.forEach((spa, index) => {
            span[ Math.floor(Math.random() * (9 - 1)) + 1].classList.add('active');
        });

    }

    function holaa(){
        span.forEach((spa, index) => {
            span[ Math.floor(Math.random() * (9 - 1)) + 1].classList.remove('active')
        });

    }
    setInterval('hola()', 1000);
    setInterval('holaa()', 1000);

    gsap.registerPlugin(MotionPathPlugin);

    // path: [ {x:400, y:80}, {x:500, y:-200}, {x:300, y:-250}, {x:400, y:-100}, {x:800, y:0},      ],

    const tween = gsap.timeline();
    tween.to(".plane", {
      duration: 7,
      ease: "power1.inOut",
      motionPath: {
        path: [ {x:500, y:100}, {x:750, y:-100}, {x:350, y:-50}, {x:600, y:130}, {x:1200, y:-400}  ], 
        curviness: 1.2,
        autoRotate: true
      }
    });
    
    // const controller = new ScrollMagic.Controller();
    // const scene = new ScrollMagic.Scene({
    // triggerElement: '.inicio',
    // duration: 2000,
    // triggerHook: 0
    // })
    // .setTween(tween)
    // .setPin('.inicio')
    // .addTo(controller);

// const tween = new TimelineLite();
// tween.add(TweenLite.to('.plane', 1, {
//     bezier: rutaPaper,
//     ease: Power1.easeInOut
// }))