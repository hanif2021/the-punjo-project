// header-stick
$(document).ready(function($) {

    /*-- Menu Sticky --*/
    var windows = $(window);
    var sticky = $('.header-sticky')
    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 250) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });

    $(".toggle-menu-icon").click(function(){
        $(".menu").slideToggle();
    })
});






// nav stick 

    // Scroll Spy
    $('body').scrollspy({target:".navbar-nav", offset: 10});

    // Add smooth scrolling on all links inside the navbar
    $(".navbar-nav a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
  
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 800, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    });

    // Hide Navbar In Mobile
    $(".navbar-collapse").collapse("hide");
  
    } // End if
  
    });


// counter-up 







// mix 




// ownnn 

// backto top 
