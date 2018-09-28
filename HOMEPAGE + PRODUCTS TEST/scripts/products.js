if ( window.scrollY == 0) {
        document.getElementById("animation-scroll").style.position= 'fixed';
        document.getElementById("animation-scroll").style.bottom= '2%';
        document.getElementById("animation-scroll").style.transition = 'all 0.5s ease';
        document.getElementById("animation-scroll").style.transitionDelay = '1s';
     }


window.onscroll = function(ev){
if ( window.scrollY == 0) {
        document.getElementById("animation-scroll").style.position= 'fixed';
        document.getElementById("animation-scroll").style.bottom= '2%';
        document.getElementById("animation-scroll").style.transition = 'all 0.5s ease';
        document.getElementById("animation-scroll").style.transitionDelay = '1s';
     }

     var scroll = window.scrollY;
     var height = document.getElementById("first").style.height

     if (scroll > height ){
       document.getElementById("animation-scroll").style.position= 'fixed';
       document.getElementById("animation-scroll").style.bottom= '2%';
  }
}
