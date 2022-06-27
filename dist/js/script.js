function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start) + "+";
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const lectures = document.getElementById("lecturesCount");
const instructors = document.getElementById("instructorsCount");
const success = document.getElementById("successCount");
const teachers = document.getElementById("teachersCount");
const students = document.getElementById("studentsCount");
const courses = document.getElementById("coursesCount");
const country = document.getElementById("countryCount");



const playButton = document.getElementById("play-btn");
playButton.addEventListener("click", function () {
  if (video.paused == true) {
    video.play();
    $(".play-btn__icons").addClass("menu__item--active");
  } else {
    video.pause();
    $(".play-btn__icons").removeClass("menu__item--active");
  }
});

// $(document).ready(function () {
//   $(".testimonial__list").slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     dots: true,
//     infinite: false,
//     prevArrow: '<button class="testimonial__prev-btn"></button>',
//     nextArrow: '<button class="testimonial__next-btn"></button>',
//     responsive: [{
//         breakpoint: 911,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: !0
//         }
//       },
//       {
//         breakpoint: 671,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 450,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       },
//     ],
//   })
// });
if (setTimeout(10), $(window).width() > "968") {
  var i = setTimeout((function () {}), 0);
  $(".has-dropdown > a, .submenu__list").hover((function () {
    $(".hover").removeClass("hover menu__item--active"), $(".submenu__list").css("min-height", "0"), $(this).parent().addClass("hover menu__item--active"), $(this).parent().find(".submenu__list").css("min-height", $(this).parent().find(".submenu__list").data("height")), clearTimeout(i)
  }), (function () {
    var e = $(this);
    clearTimeout(i), i = setTimeout((function () {
      $(".hover").removeClass("hover menu__item--active"), e.parent().find(".submenu__list").css("min-height", "0")
    }), 200)
  })), $(".submenu__list").click((function () {
    clearTimeout(i)
  }))
} else $(".has-dropdown > a").click((function () {
  return $(this).parent().hasClass("hover") ? ($(this).parent().removeClass("hover menu__item--active"), $(this).parent().find(".submenu__list").css("min-height", "0")) : ($(".hover .submenu__list").css("min-height", "0"), $(".hover").removeClass("hover menu__item--active"), $(this).parent().addClass("hover menu__item--active"), $(this).parent().find(".submenu__list").css("min-height", $(this).parent().find(".submenu__list").data("height"))), !1
}));

var triggered = false;
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() >= $(".hero__advantages").height() && triggered === false) {
    triggered = true;
    animateValue(lectures, 0, 1400, 1000);
    animateValue(instructors, 0, 1100, 1000);
    animateValue(success, 0, 800, 1000);
    animateValue(teachers, 0, 85, 1000);
    animateValue(students, 0, 850, 1000);
    animateValue(courses, 0, 55, 1000);
    animateValue(country, 0, 25, 1000);
  }
});