$(document).ready(function() {
 
  $(".sm-carousel").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      pagination : true,
      paginationNumbers: false
 
  });


  $(".bg-carousel").owlCarousel({

      slideSpeed : 300,
      paginationSpeed : 400,
      pagination : false,
      paginationNumbers: false,
      items : 3, //10 items above 1000px browser width
      itemsDesktop : [1000,3], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
 
  });
    $(".next").click(function(){
        $('.bg-carousel').trigger('owl.next');
        return false;
    });

    $(".tp-banner").revolution({
      delay:5000,
      startwidth:1170,
      startheight:438,
      hideThumbs:200
    });
 
});