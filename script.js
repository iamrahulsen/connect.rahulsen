console.log(
  '%cHi.',
  "color: blue; font-family:monospace; font-size: 40px; font-weight: bolder; text-shadow: 0px 0px 10px gray;"
);
console.error("something is wrong!");
console.log("%chmm...", "font-style: italic; font-size: 5px;");
console.log("%chmm...", "font-style: italic; font-size: 10px;");
console.log("%chmm...", "font-style: italic; font-size: 20px;");
console.log("%cHMM...", "font-style: italic; font-size: 30px;");
console.log("%cHMmmMMmMmMmmMMM!", "font-style: italic; font-size: 40px;");
// Form
$(function () {
  $(".toggleform").click(function (e) {
    e.preventDefault();
    $(".popup").fadeToggle();
  });
  $("form").submit(function (e) {
    e.preventDefault();

    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function (e) {
      alert("Thank you!");
      console.log(e);
      $(".popup").fadeOut();
    });
  });
});
// Animation
function intro() {
  var tl = gsap.timeline({ defaults: { duration: 1 } });
  tl.set(".about p", { "overflow-y": "hidden" })
    .set(".contactbutton", { display: "block" })
    .from(".hi", { color: "white", duration: 0.3 }, "1.2")
    .from(".comma, .im span", { opacity: 0, duration: 0.2, stagger: 0.1 })
    .from(
      ".letter",
      { y: 5, opacity: 0, stagger: 0.1, ease: "back.out(2)" },
      "+=0.2"
    )
    .from(".period", { y: -100, opacity: 0, ease: "bounce.out" }, "+=0.4")
    .from(".title p", { opacity: 0, duration: 0.5, y: -5 }, "-=0.4")
    .from(".title h1, .title p", {
      x: 30,
      stagger: 0.1,
      ease: "elastic.out(1, 0.75)",
    })
    .from(".contactbutton", { opacity: 0 }, "<0.28")
    .from(".navbar", { y: 20, opacity: 0 }, "<")
    .from(".navbar .logo", { opacity: 0 })
    .from(".links", { y: 20, opacity: 0 }, "<")
    .from(".links a", {
      "padding-top": "20px",
      "padding-bottom": "20px",
      opacity: 0,
      stagger: { amount: 0.2, from: "center" },
      duration: 0.2,
    })
    .from(".about", { y: -100, opacity: 0 })
    .from(".about h2", { opacity: 0 })
    .from(".about p", {
      y: 50,
      opacity: 0,
      duration: 0.7
    }, "-=0.3")
    .set(".about p", { "overflow-y": "auto" })
    .from("footer", { opacity: 0, y: 10 }, "<")
    .from("footer>*", { opacity: 0, duration: 0.5 }, "-=0.3");
  return tl;
}
var main = gsap.timeline();
main.add(intro());
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
const textArray = ["tech enthusiast.", "engineer.", "programmer.", "problem solver.", "developer."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


$(document).ready(function () {
  $('button[type="submit"]').attr('disabled', true);
  $('input[type="text"],input[type="email"],textarea').on('keyup', function () {
    var textarea_value = $("#texta").val();
    var text_name = $('input[name="name"]').val();
    var text_email = $('input[name="email"]').val();
    if (textarea_value != '' && text_name != '' && text_email != '') {
      $('button[type="submit"]').attr('disabled', false);
    } else {
      $('button[type="submit"]').attr('disabled', true);
    }
  });

  $('.logo').click(function () {
    $('#collapse').slideToggle("slow");
  });
  $(".ok").click(function () {
    $(".popups").hide("slow", "swing");
  });
  $(".sub").click(function () {
    $(".popup").hide();
    $(".popups").show("slow", "swing");
  });



  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });

});
