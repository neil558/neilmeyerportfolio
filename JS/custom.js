// This is the universal JQUERY that enables a smooth scroll whenever 
// an anchor tag is clicked on.

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){
        window.location.hash = hash;
      });
    } 
  });
});

// This is the JQUERY that initialises the To-The-Top Button 
// It is a button on the bottom right of the screen that scrolls 
// to the top of the when clicked upon

jQuery('body').toTopButton({});

// These are all the ScrollSpy JQUERY
// This is the JQUERY that initialises the scrollspy effects.

$('.scroll-spy').scrollSpy({
    offsetElement:'#top-content',
    ignoreAnchors: ['.not' ],
  });

// This configures the smooth scroll behavior of the scrollspy effect

$('.scroll-spy').scrollSpy({
    offset: 0,
    scrollDuration: 0,
    scrollEasing:'swing',
  });

// This defines the active class

$('.scroll-spy').scrollSpy({
    activeClass:'enabled'
  });

// This defines the anchors selector in a JS array

$('.scroll-spy').scrollSpy({
    anchors: ['a[href*=\\#]']
  });

// This JS enables tooltips everywhere

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// This enables popovers everywhere

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// This is the JS that makes the Popover dissapear on next click

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})