var flag = true;
function dropdown(){
  var top = document.getElementById("top");
  var mid = document.getElementById("mid");
  var bot = document.getElementById("bot");
  var dropdiv = document.getElementById("drop_div");

  top.style.WebkitTransitionDuration='.5s';
  mid.style.WebkitTransitionDuration='.25s';
  bot.style.WebkitTransitionDuration='.25s';
  
  
  if(flag){
    dropdiv.style.WebkitTransitionDuration='0s';
    dropdiv.style.opacity = 1;
    

    mid.style.transform = "translatey(-10px) skew(-40deg)";
    

    setTimeout(function(){
      dropdiv.style.WebkitTransitionDuration='1s';
      top.style.opacity = 0;
      top.style.transform = "translatey(10px) skew(-40deg)";
      mid.style.transform = "translatey(10px) translatey(-10px) skew(-40deg)";
      bot.style.transform = "translatey(-10px) skew(-40deg)";
      dropdiv.style.transform = "translatey(0px)";
    }, 250);
  
    mid.style.WebkitTransitionDuration='.5s';
    bot.style.WebkitTransitionDuration='.5s';

    setTimeout(function(){
      top.style.transform = "translatey(10px) rotate(30deg)";
      mid.style.transform = "translatey(10px) translatey(-10px) rotate(30deg) ";
      bot.style.transform = "translatey(-10px) rotate(-30deg)";
    }, 500);
    setTimeout(function(){
      dropdiv.style.WebkitTransitionDuration='0s';
    }, 1000);
    
  }
  else{

    
    mid.style.WebkitTransitionDuration='.5s';
    bot.style.WebkitTransitionDuration='.5s';
    dropdiv.style.WebkitTransitionDuration='1s';
    
    top.style.transform = "translatey(10px) skew(-40deg)";
    mid.style.transform = "skew(-40deg)";
    bot.style.transform = "translatey(-10px) skew(-40deg)";
    dropdiv.style.transform = "translatey(-100%)"

    setTimeout(function(){
      top.style.opacity = 1;
      top.style.transform = "skew(-40deg)";
      mid.style.transform = "skew(-40deg)";
      bot.style.transform = "skew(-40deg)";
    }, 500);
    

  }
  flag = !flag;
} 

