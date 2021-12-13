var containers = document.getElementsByClassName('proj_container');
var image_containers = document.getElementsByClassName('img_container');
var images = document.getElementsByClassName('proj_img');
var texts = document.getElementsByClassName('proj_txt');
var gits = document.getElementsByClassName('proj_git');



function format_pg(){
  var h;
  for(var i = 0; i < containers.length; i++)
  {
    containers[i].style.flexDirection = "column";
    image_containers[i].style.width = '100%';
    h = images[2].clientHeight * 2;
    containers[i].style.height = h.toString() + "px";
    texts[i].style.height = images[2].clientHeight;
    texts[i].style.width = '100%';
    texts[i].style.fontSize = '4vw';
    gits[i].style.left = '60px';
    gits[i].style.height = '5%';
  }
}

function format_pg_b(){
  var h;
  for(var i = 0; i < containers.length; i++)
    {
      containers[i].style.flexDirection = "row";
      image_containers[i].style.width = '50%';
      h = images[2].clientHeight;
      containers[i].style.height = h.toString() + "px";
      texts[i].style.height = h;
      texts[i].style.width = '50%';
      texts[i].style.fontSize = '1.9vw';
      gits[i].style.left = 'calc(50vw + 40px)';
      gits[i].style.height = '10%';
    }
}

function wrapDiv(){
  
  if ((window.innerWidth < screen.width / 1.9) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
  {
    format_pg();
  }
  else // under
  {
    format_pg_b();
  }
}
window.onresize = wrapDiv;