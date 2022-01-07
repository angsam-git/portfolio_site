var proj_container_wrappers = document.getElementsByClassName("proj_container_wrapper");
var proj_containers = document.getElementsByClassName("proj_container");
var img_containers = document.getElementsByClassName("img_container");


var links = document.getElementById("links");
var dropdown = document.getElementById("drop_down");
function format_pg(){
  var h;
  links.style.opacity = "0";
  links.style.pointerEvents = "none";

  drop_down.style.opacity = "1";
  drop_down.style.pointerEvents = "auto";

  /*
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
    
  }*/

}

function format_pg_b(){
  var h;
  links.style.opacity = "1";
  links.style.pointerEvents = "auto";

  drop_down.style.opacity = "0";
  drop_down.style.pointerEvents = "none";

  /*
  for(var i = 0; i < containers.length; i++)
    {
      
      containers[i].style.flexDirection = "row";
      image_containers[i].style.width = '60%';
      h = images[2].clientHeight;
      containers[i].style.height = h.toString() + "px";
      texts[i].style.height = h;
      texts[i].style.width = '50%';
      texts[i].style.fontSize = '1.9vw';
      gits[i].style.left = 'calc(50vw + 40px)';
      gits[i].style.height = '10%';
      
    }*/
}

function wrapDiv(){
  var about_text = document.getElementById("about_text");
  if ((window.innerWidth < screen.width / 1.9) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) // under
  {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      var li = document.getElementById("li");
      var gh = document.getElementById("gh");
      var email = document.getElementById("email");
      // TO DO MAKE THE COLUMN FLEX FOR MOBILE      
    }
    
    about_text.style.fontSize = '18pt';

    format_pg();
  }
  else 
  {
    about_text.style.fontSize = '22pt';
    format_pg_b();
    if (!flag){
      dropdown();
    }
    
  }
}
window.onresize = wrapDiv;