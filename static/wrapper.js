

function format_pg(){
  var proj_container_wrappers = document.getElementsByClassName("proj_container_wrapper");
  var proj_containers = document.getElementsByClassName("proj_container");
  var img_containers = document.getElementsByClassName("img_container");
  var text_containers = document.getElementsByClassName("text_container");
  var proj_descriptions = document.getElementsByClassName("proj_description");
  var proj_tech = document.getElementsByClassName("proj_tech");
  var proj_text_headers = document.getElementsByClassName("proj_text_header");
  var proj_texts = document.getElementsByClassName("proj_text");
  var technologies = document.getElementsByClassName("technologies");
  var techs = document.getElementsByClassName("tech");
  var proj_sws = document.getElementsByClassName("proj_sw");
  var proj_apis = document.getElementsByClassName("proj_api");
  
  var links = document.getElementById("links");
  var drop_down = document.getElementById("drop_down");
  var about_text = document.getElementById("about_text");

  links.style.opacity = "0";
  links.style.pointerEvents = "none";
  drop_down.style.opacity = "1";
  drop_down.style.pointerEvents = "auto";
  for(var i = 0; i < proj_containers.length; i++) 
  {
    proj_container_wrappers[i].style.height = "100vw";
    proj_containers[i].style.flexDirection = "column";
    img_containers[i].style.height = "80%";
    img_containers[i].style.width = "100%";
    text_containers[i].style.height = "50%";
    text_containers[i].style.width = "100%";
    text_containers[i].style.flexDirection = "row";
    proj_descriptions[i].style.height = "100%";
    proj_descriptions[i].style.width = "50%";
    proj_tech[i].style.width = "50%";
    proj_tech[i].style.height = "100%";

    technologies[i].style.flexWrap = "wrap";

    if(i < proj_containers.length - 1)
    {
      proj_apis[i].style.height = "45%";
    }
    

    proj_sws[i].style.height = "55%";
    technologies[i].style.height = "55%";

    proj_text_headers[i].style.fontSize = "4vw";
    proj_texts[i].style.fontSize = "3vw";
  }

  about_text.style.fontSize = '18pt';


  for (var j = 0; j < techs.length; j++){
    techs[j].style.width = "33%"
  }

}

function format_pg_b(){


  var proj_container_wrappers = document.getElementsByClassName("proj_container_wrapper");
  var proj_containers = document.getElementsByClassName("proj_container");
  var img_containers = document.getElementsByClassName("img_container");
  var text_containers = document.getElementsByClassName("text_container");
  var proj_descriptions = document.getElementsByClassName("proj_description");
  var proj_tech = document.getElementsByClassName("proj_tech");
  var proj_text_headers = document.getElementsByClassName("proj_text_header");
  var proj_texts = document.getElementsByClassName("proj_text");
  var technologies = document.getElementsByClassName("technologies");
  var techs = document.getElementsByClassName("tech");
  var proj_sws = document.getElementsByClassName("proj_sw");
  var proj_apis = document.getElementsByClassName("proj_api");
  
  var links = document.getElementById("links");
  var drop_down = document.getElementById("drop_down");
  var about_text = document.getElementById("about_text");

  links.style.opacity = "1";
  links.style.pointerEvents = "auto";

  drop_down.style.opacity = "0";
  drop_down.style.pointerEvents = "none";

  for(var i = 0; i < proj_containers.length; i++)
  {
    proj_container_wrappers[i].style.height = "40vw";
    proj_containers[i].style.flexDirection = "row";
    img_containers[i].style.height = "100%";
    img_containers[i].style.width = "80%";
    text_containers[i].style.flexDirection = "column";
    text_containers[i].style.height = "100%";
    text_containers[i].style.width = "50%";
    proj_descriptions[i].style.height = "35%";
    proj_descriptions[i].style.width = "100%";
    proj_tech[i].style.height = "65%";
    proj_tech[i].style.width = "100%";

    if(i < proj_containers.length - 1)
    {
      proj_apis[i].style.height = "50%";
    }
    

    proj_sws[i].style.height = "50%";
    technologies[i].style.height = "80%";

    
    proj_text_headers[i].style.fontSize = "2vw";
    proj_texts[i].style.fontSize = "1.5vw";
  }

  if (about_text) {
    about_text.style.fontSize = '22pt';
  }

  for (var j = 0; j < techs.length; j++){
    techs[j].style.width = "15%"
  }
}

function wrapDiv(){
  



  if ((window.innerWidth < screen.width / 1.9) || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) // under
  {
    format_pg();
  }
  else {

    format_pg_b();

    if (!flag){

      dropdown();
    } 
  }
}
window.onresize = wrapDiv;