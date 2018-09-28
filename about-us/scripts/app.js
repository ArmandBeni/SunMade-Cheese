function Scroll() {
  let ypos=window.pageYOffset;
  let image=document.getElementsByClassName("image");
  let video=document.getElementById("video");
  let image1=image[0];
  let image2=image[1];
  let image3=image[2];
  let image4=image[3];

  image1.style.opacity="0";
  image2.style.opacity="0";
  image3.style.opacity="0";
  image4.style.opacity="0";
  console.log(ypos);

  if (ypos>400) {
    image1.style.opacity="1";
    image1.style.transition="opacity 1.2s ease";
  }

  if (ypos>750) {
    image2.style.opacity="1";
    image2.style.transition="opacity 1.2s ease";
  }

  if (ypos>1200) {
    image3.style.opacity="1";
    image3.style.transition="opacity 1.2s ease";
  }

  if (ypos>1500) {
    image4.style.opacity="1";
    image4.style.transition="opacity 1.2s ease";
  }

  if (ypos>2600) {
    video.play()
  }
  if (ypos<2000) {
    video.pause()
  }

}



window.addEventListener("scroll",Scroll);

let para = document.querySelector("header div.title .move")
let layer = document.querySelector("body");
let text= document.querySelector("header div.title .moveInv")
console.log(para);

layer.addEventListener("mousemove",function(e) {
  let valueX = (e.pageX * -1 / 70)
  let valueY = (e.pageY * -1 / 100)
  let invValueX = (e.pageX * 1 / 20)
  let invValueY = (e.pageY * 1 / 50)

  para.style.transform='translate3d('+valueX+'px,'+valueY+'px,0)';
  text.style.transform='translate3d('+invValueX+'px,'+invValueY+'px,0)'
});




window.addEventListener("scroll",Scroll);


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
