$(function() {
   
   //animate on scroll
   new WOW().init();
   
});// to skrót na document.ready


$(function() {
   
   $("#team-members").owlCarousel({
      
      items: 3,
      autoplay: true,
      smartSpeed: 700,
      loop: true
      
   });
   
});

$(function() {
   
   $("#customers-testimonials").owlCarousel({
      
      items: 1,
      autoplay: true,
      smartSpeed: 700,
      loop: true
      
   });
   
});

$(function(){
   
   $(".navbar-collapse ul li a").on("click touch", function(){
      $(".navbar-toggle").click();
   })
});

