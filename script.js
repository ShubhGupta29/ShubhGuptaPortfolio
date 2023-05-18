document.getElementById('portfolio').innerText=" Portfolio";
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 40){
            document.getElementById('ShubhGupta').style.transition="all 0.5s ease";
            document.getElementById('ShubhGupta').innerText="SG";
            document.getElementById('ShubhGupta').style.color="crimson";
            document.getElementById('ShubhGupta').style.marginLeft="-64px"
            document.getElementById('portfolio').innerText="";
            // document.getElementById('menu').style.color="crimson";
            document.getElementById('navbar').addClass("sticky");
        }else{
            document.getElementById('ShubhGupta').style.transition="all 0.5s ease";
            document.getElementById('ShubhGupta').innerHTML="Shubh Gupta ";
            document.getElementById('ShubhGupta').style.color="#fff";
            document.getElementById('ShubhGupta').style.marginLeft="0"
            document.getElementById('portfolio').innerText=" Portfolio";
            // document.getElementById('menu').style.color="#fff";S
            document.getElementById('navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            document.getElementById('scroll-up-btn').addClass("show");
        }else{
            document.getElementById('scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Engineer", "Develope", "Travel", "Game", "Code"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Engineer", "Develope", "Travel", "Game","Code"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            800:{
                items: 2,
                nav: false
            },
            1200:{
                items: 3,
                nav: false
            }
        }
    });
});
// skills sphere
const Texts = [
    'HTML', 'CSS', 'Javascript',
    'Typescript', 'Angular', 'Java',
    'SpringBoot', 'RESTful API',
    'Bootstrap', 'Material Angular', 'Ruby',
    'Python', 'MYSQL', 'GIT'
];

var tagCloud = TagCloud('.Sphere', Texts, {

    // Sphere radius in px
    radius: 230,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'normal',
    initSpeed: 'fast',

    // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
    direction: 135,

    // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
    keep: true

});

// Giving color to each text in sphere
var color = 'crimson';
document.querySelector('.Sphere').style.color = color;

    //   cursor

    // const cursor = document.querySelector('.cursor');
	// document.addEventListener('mousemove', e => {
	// 	cursor.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
	// });

	// const cursor2 = document.querySelector('.cursor2');
	// document.addEventListener('mousemove', e => {
	// 	cursor2.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
	// });
