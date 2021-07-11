$(document).ready(function(){
    $('.single-item').slick({
      dots: true,
  infinite: false,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
    });
  });


function openSearch(){
  document.getElementById("search").style.height= '70px';
  document.getElementById('in-s').style.height= '30px';
  document.getElementById('close').style.fontSize= '30px';

}
function closeSearch(){
  document.getElementById("search").style.height= '0px';
  document.getElementById('in-s').style.height= '0px';
  document.getElementById('close').style.fontSize= '0px';

}