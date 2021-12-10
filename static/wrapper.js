var containers = document.getElementsByClassName('proj_container');
var image_containers = document.getElementsByClassName('img_container');
var images = document.getElementsByClassName('proj_img');
var texts = document.getElementsByClassName('proj_txt');
var gits = document.getElementsByClassName('proj_git');



function format_pg(){
  var i = 0;
  
  while(i < containers.length)
  {
    containers[i].style.flexDirection = "column";
    image_containers[i].style.width = '100%';
    var h = images[2].clientHeight * 2;
    if(h > 0)
      containers[i].style.height = h.toString() + "px";
    else
    {
      images = document.getElementsByClassName('proj_img');
      continue;
    }
      
    texts[i].style.height = images[2].clientHeight;
    texts[i].style.width = '100%';
    texts[i].style.fontSize = '4vw';
    gits[i].style.left = '60px';
    gits[i].style.height = '5%';
    i++;
  }
}

function format_pg_b(){
  for(var i = 0; i < containers.length; i++)
    {
      containers[i].style.flexDirection = "row";
      image_containers[i].style.width = '50%';
      var h = images[2].clientHeight;
      if(h > 0)
        containers[i].style.height = h.toString() + "px";
      else
      {
        images = document.getElementsByClassName('proj_img');
        continue;
      }
      texts[i].style.height = h;
      texts[i].style.width = '50%';
      texts[i].style.fontSize = '1.9vw';
      gits[i].style.left = 'calc(50vw + 40px)';
      gits[i].style.height = '10%';
    }
}

if (window.innerWidth < screen.width / 1.9)
{
  format_pg();
}

else
{
  format_pg_b();
}

function wrapDiv(){
  
  if (window.innerWidth < screen.width / 1.9)
  {
    format_pg();
  }
  else // under
  {
    format_pg_b();
  }
}
window.onresize = wrapDiv;