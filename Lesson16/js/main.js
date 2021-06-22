function openNav() {
    document.getElementById("mySidepanel").style.width = "400px";
    // document.getElementById("mySidepanel").style.height = "150vh";

  }
  
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  

  
  
  

  jQuery(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        var navOpacity = scrollPos / 800;

        $('nav').css("opacity", navOpacity);

        if ($('nav').css('opacity') < 1) {
            $('nav').css('opacity', 1)
        };
    });
});