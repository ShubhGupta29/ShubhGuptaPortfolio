document.getElementById("portfolio").innerText = " Portfolio";
// function sendMsg() {
//     console.log("Strat");
//     var cName=document.getElementById("clientName").value;
//     var cEmail=document.getElementById("clientEmail").value;
//     var cMsg=document.getElementById("msg").value;
//     console.log(cName,cEmail,cMsg);
//     var url="mailto:reachshubhgupta@gmail.com/?body="+cMsg;
//     console.log(url)
//     window.URL(url)
// }

$(document).ready(function () {
  $(window).scroll(function () {
    var windowWidth = $(window).width();

    if (windowWidth > 400) {
      if (this.scrollY > 40) {
        document.getElementById("ShubhGupta").style.transition =
          "all 0.5s ease";
        document.getElementById("ShubhGupta").innerText = "SG";
        document.getElementById("ShubhGupta").style.color = "crimson";
        document.getElementById("ShubhGupta").style.marginLeft = "-64px";
        document.getElementById("portfolio").innerText = "";
        // document.getElementById('menu').style.color="crimson";
        document.getElementById("navbar").addClass("sticky");
      } else {
        document.getElementById("ShubhGupta").style.transition =
          "all 0.5s ease";
        document.getElementById("ShubhGupta").innerHTML = "Shubh Gupta ";
        document.getElementById("ShubhGupta").style.color = "#fff";
        document.getElementById("ShubhGupta").style.marginLeft = "0";
        document.getElementById("portfolio").innerText = " Portfolio";
        // document.getElementById('menu').style.color="#fff";S
        document.getElementById("navbar").removeClass("sticky");
      }
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      document.getElementById("scroll-up-btn").addClass("show");
    } else {
      document.getElementById("scroll-up-btn").removeClass("show");
    }
  });

  $(document).ready(function () {
    var windowWidth = $(window).width();

    if (windowWidth <= 400) {
      document.getElementById("ShubhGupta").style.transition = "all 0.5s ease";
      document.getElementById("ShubhGupta").innerText = "SG";
      document.getElementById("ShubhGupta").style.color = "crimson";
      // document.getElementById('ShubhGupta').style.marginLeft="-64px"
      document.getElementById("portfolio").innerText = "";
      // document.getElementById('menu').style.color="crimson";
      document.getElementById("navbar").addClass("sticky");
    } else {
      console.log("Mobile or tablet screen");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Engineer", "Develope", "Travel", "Game", "Code"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Engineer", "Develope", "Travel", "Game", "Code"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      800: {
        items: 2,
        nav: false,
      },
      1200: {
        items: 3,
        nav: false,
      },
    },
  });
});
// skills sphere
const Texts = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "Angular",
  "Java",
  "SpringBoot",
  "RESTful API",
  "Bootstrap",
  "Material Angular",
  "Ruby",
  "Python",
  "MYSQL",
  "GIT",
];

var tagCloud = TagCloud(".Sphere", Texts, {
  // Sphere radius in px
  radius: 230,

  // animation speed
  // slow, normal, fast
  maxSpeed: "normal",
  initSpeed: "fast",

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)]
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true,
});

// Giving color to each text in sphere
var color = "crimson";
document.querySelector(".Sphere").style.color = color;

//   cursor

// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e => {
// 	cursor.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
// });

// const cursor2 = document.querySelector('.cursor2');
// document.addEventListener('mousemove', e => {
// 	cursor2.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
// });

var noida =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58283.94590941084!2d77.373174454878!3d28.53559112950471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703702289376!5m2!1sen!2sin";

var kanpur =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114312.36273751344!2d80.255980662254!3d26.44730377606477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703702403367!5m2!1sen!2sin";

document.addEventListener("DOMContentLoaded", function () {
  // Get the container element
  var container = document.getElementById("map");

  // Create the iframe element
  var iframe = document.createElement("iframe");

  document.getElementById("location").innerText = "Noida, India";
  // Set attributes for the iframe
  iframe.src = noida; // Set the source URL
  iframe.width = "550"; // Set the width
  iframe.height = "400"; // Set the height
  iframe.frameborder = "0"; // Set the frameborder
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";

  // Append the iframe to the container
  container.appendChild(iframe);
});

const elements = document.querySelectorAll(".text-2 span");

elements.forEach((element) => {
  element.addEventListener("mouseout", (e) => {
    console.log("classlist e sg ", e);
    if (e.target.classList.contains("hoveredColor")) {
      e.target.classList.remove("hoveredColor");
      e.target.classList.add("unHoveredColor");
    } else {
      e.target.classList.add("hoveredColor");
      e.target.classList.remove("unHoveredColor");
    }
  });
});
