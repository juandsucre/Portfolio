
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


    // path: [ {x:400, y:80}, {x:500, y:-200}, {x:300, y:-250}, {x:400, y:-100}, {x:800, y:0},      ],
    
    //path: [ {x:500, y:100}, {x:750, y:-100}, {x:350, y:-50}, {x:600, y:130}, {x:1300, y:-380}], 

    setTimeout(() => {
        document.getElementById('navBar').style.background ="rgba(34,34,34)";
    }, 2500);


    var lastScrollTop = 0;
    function Scroll(){
        var Ypos = window.pageYOffset;
        if(Ypos  > lastScrollTop)
        {

        }

    }

    
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 2 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
   //     console.log(plane)
    
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