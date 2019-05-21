sliderint = 1;
sliderNext = 2;

//START
function startCarousel() {
  count = $(".slider>li").length;
  loop = setInterval(function() {

    if (sliderNext > count) {
      sliderNext = 1;
      sliderint = 1;
    }
    showSlide(sliderNext);
  }, 3000)
}

// PREV
function prev() {
  newSlide = sliderint - 1;
  showSlide(newSlide);

}
// NEXT
function next() {
  newSlide = sliderint + 1;
  showSlide(newSlide);
}
// STOP (on hover)
function stopLoop() {
  window.clearInterval(loop);
}

let effect = 2;
// SHOW the slide
function showSlide(id) {
  stopLoop();
  $(".slider__bullets a").removeClass("slider__bullet_active");

  if (id > count) {
    id = 1;
  } else if (id < 1) {
    id = count;
  }

  $('.slider>li').fadeOut(300);
  $('.slider>li#' + id).fadeIn(300);

  // $('.slider>li').slideUp(300);
  // $('.slider>li#' + id).slideDown(300);

  $(".slider__bullets a[href='#" + id + "']").addClass("slider__bullet_active");
  sliderint = id;
  sliderNext = id + 1;
  startCarousel();
}

// ONLOAD ----------------------------------------------------------------------
$(document).ready(function() {

  $('body').on('click', ".slider__bullets a", function(e) {
    e.preventDefault();
    var href = $(e.target).attr("href");
    showSlide(href.substring(1, href.length));
  });

  // prev nav
  $('.slider__nav_left').click(function(e) {
    // alert('left');
    prev();
    return false;
  });

  // next nav
  $('.slider__nav_right').click(function(e) {
    // alert('right');
    next();
    return false;
  });

  // on left keypress (prev)
  $(document).keydown(function(e) {
    if (e.which == 37) {
      // alert("left pressed");
      prev();
      return false;
    }
  });

  // on right keypress (next)
  $(document).keydown(function(e) {
    if (e.which == 39) {
      // alert("right pressed");
      next();
      return false;
    }
  });

  $(".slider>li").hover(
    function() {
      stopLoop();
    },
    function() {
      startCarousel();
    }
  );

  $('.slider>li#1').fadeIn(300);
  startCarousel();

});
