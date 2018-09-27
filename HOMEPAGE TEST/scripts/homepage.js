let bgImage = document.getElementById("home-top")
let layer = document.getElementById("page");
let text= document.getElementById("title")

layer.addEventListener("mousemove",function(e) {
  let valueX = (e.pageX * -1 / 70)
  let valueY = (e.pageY * -1 / 100)
  let invValueX = (e.pageX * 1 / 20)
  let invValueY = (e.pageY * 1 / 50)

  bgImage.style.backgroundPosition=valueX+'px '+valueY+'px';
  text.style.transform='translate3d('+invValueX+'px,'+invValueY+'px,0)'
});



document.getElementById('kit').addEventListener(
  'mouseover',
  function () {
    document.getElementById('kit').style.border='none'
    document.getElementById('about').style.visibility='hidden'
    document.getElementById('title').style.visibility='hidden'
    document.getElementById('presentation').style.display='block'
    document.querySelector('#presentation').play();

  },
false);

  document.getElementById('kit').addEventListener(
    'mouseleave',
    function () {
      document.getElementById('kit').style.border='solid 5px white'
      document.getElementById('about').style.visibility='visible'
      document.getElementById('title').style.visibility='visible'
      document.getElementById('presentation').style.display='none'
      document.querySelector('#presentation').pause();
    },
    false
  );

document.getElementById('about').addEventListener(
  'mouseover',
  function () {
    document.getElementById('about').style.border='none'
    document.getElementById('kit').style.visibility='hidden'
    document.getElementById('title').style.visibility='hidden'
    document.getElementById('project').style.display='block'
    document.querySelector('#project').play();
  },
  false
);

document.getElementById('about').addEventListener(
  'mouseleave',
  function () {
    document.getElementById('about').style.border='solid 5px white'
    document.getElementById('kit').style.visibility='visible'
    document.getElementById('title').style.visibility='visible'
    document.getElementById('project').style.display='none'
    document.querySelector('#project').pause();
  },
  false
);
