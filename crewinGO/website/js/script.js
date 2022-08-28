


 /* ==============================================
  	  Progress Bar
  	=============================================== */ 
		$('.experience').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$.each($('div.progress-bar'),function(){
				$(this).css('width', $(this).attr('aria-valuemax')+'%');
			});
			$(this).unbind('inview');
		}
	});

	
 /* ==============================================
  	 Preloader
  	=============================================== */ 

	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#preloader').delay(350).fadeOut('slow');
	    });
	}());
 
 /* ==============================================
  	  WOW Javascripts 
  	=============================================== */ 

 new WOW().init();

 /* ==============================================
  	  Navbar-Fixed-Top
  	=============================================== */ 
	
	
 $(window).bind('scroll', function() {
    var navHeight = 0;
    if ($(window).scrollTop() > navHeight) {
      $('.navbar').addClass('on');
    } else {
      $('.navbar').removeClass('on');
    }
 });


 /* ==============================================
  	 ToolTip
  	=============================================== */ 
	
//	$(function () {
//  $('[data-toggle="tooltip"]').tooltip()
//})
	

/* ==============================================
  	  Count
  	=============================================== */ 

    $('#fun-facts').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

  /* ========================================================================
     On click menu item animate to the section
   ========================================================================== */
  $(".mobilenav li, .back-to-top").on('click', function() {
    var target = $(this).data('rel');
    var $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 500, 'swing');
  });


function changeLang() {
  let enClasses = document.getElementsByClassName('lang-en');
  let arClasses = document.getElementsByClassName('lang-ar');
  if (document.body.classList.contains('dir-rtl')) {
    for (let i = 0; i < enClasses.length; i++) {
      enClasses[i].classList.remove('d-none');
    }
    for (let i = 0; i < arClasses.length; i++) {
      arClasses[i].classList.add('d-none');
    }
    document.body.classList.remove('dir-rtl');
  }
  else {
    for (let i = 0; i < enClasses.length; i++) {
      enClasses[i].classList.add('d-none');
    }
    for (let i = 0; i < arClasses.length; i++) {
      arClasses[i].classList.remove('d-none');
    }
    document.body.classList.add('dir-rtl');
  }
}

/* Add Styling to Section Nav Link according to its Section */
let navLinks = document.querySelectorAll(".nav-link.scroll");

const headerNav = document.querySelector("#menu"),
  headerNavHeight = headerNav.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + headerNavHeight;

  for (link of navLinks) {
    let section = document.querySelector(link.hash);

    // Add Styling to the Active Anchor, Active Section (header + content)
    if (section) {
      ((section.offsetTop - 60) <= fromTop && (section.offsetTop - 60) + section.offsetHeight > fromTop)
        ? link.classList.add("active")
        : link.classList.remove("active");
    }
  }
});