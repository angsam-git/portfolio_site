function loadUp(){
    wrapDiv();
    var logo_conceal = document.getElementById("logo_conceal");
    var logo_wrapper = document.getElementById("logo_wrapper");
    var logo_a = document.getElementById("logo_bg_a");
    var logo_ma = document.getElementById("logo_bg_ma");
    var logo_mb = document.getElementById("logo_bg_mb");
    var logo_s = document.getElementById("logo_bg_s");
    var toolbar = document.getElementById("toolbar");

    var top_arr = document.getElementById("top");
    var mid_arr = document.getElementById("mid");
    var bot_arr = document.getElementById("bot");

    logo_conceal.style.WebkitTransitionDuration='3s';
    logo_wrapper.style.WebkitTransitionDuration='1.8s';
    logo_a.style.WebkitTransitionDuration='2s';
    logo_s.style.WebkitTransitionDuration='2s';
    logo_ma.style.WebkitTransitionDuration='2s';
    logo_mb.style.WebkitTransitionDuration='2s';
    top_arr.style.WebkitTransitionDuration='2s';
    mid_arr.style.WebkitTransitionDuration='2s';
    bot_arr.style.WebkitTransitionDuration='2s';

    logo_conceal.style.transitionDuration='3s';
    logo_wrapper.style.transitionDuration='1.8s';
    logo_a.style.transitionDuration='2s';
    logo_s.style.transitionDuration='2s';
    logo_ma.style.transitionDuration='2s';
    logo_mb.style.transitionDuration='2s';
    top_arr.style.transitionDuration='2s';
    mid_arr.style.transitionDuration='2s';
    bot_arr.style.transitionDuration='2s';

    logo_a.style.opacity='0.5';
    logo_ma.style.opacity='0.5';
    logo_mb.style.opacity='0.5';


    setTimeout(function(){
        logo_s.style.opacity='0.5';
        logo_conceal.style.width = '0px';
        logo_wrapper.style.width = '80%';

      }, 1000);

      setTimeout(function(){
        top_arr.style.opacity = 1;
        mid_arr.style.opacity = 1;
        bot_arr.style.opacity = 1;
      }, 2000);
      


      setTimeout(function(){
        top_arr.style.webkitAnimation = "mouse-scroll 1s infinite";
        top_arr.style.animation = "mouse-scroll 1s infinite";
        top_arr.style.animationDelay = '.2s';
        top_arr.style.webkitAnimationDelay = '.2s';
        top_arr.style.animationDirection = 'alternate';
        top_arr.style.webkitAnimationDirection = 'alternate';

        mid_arr.style.webkitAnimation = "mouse-scroll 1s infinite";
        mid_arr.style.animation = "mouse-scroll 1s infinite";
        mid_arr.style.animationDelay = '.4s';
        mid_arr.style.webkitAnimationDelay = '.4s';
        mid_arr.style.animationDirection = 'alternate';
        mid_arr.style.webkitAnimationDirection = 'alternate';

        bot_arr.style.webkitAnimation = "mouse-scroll 1s infinite";
        bot_arr.style.animation = "mouse-scroll 1s infinite";
        bot_arr.style.animationDelay = '.6s';
        bot_arr.style.webkitAnimationDelay = '.6s';
        bot_arr.style.animationDirection = 'alternate';
        bot_arr.style.webkitAnimationDirection = 'alternate';

        logo_conceal.style.WebkitTransitionDuration='0s';
        logo_wrapper.style.WebkitTransitionDuration='0s';
        logo_a.style.WebkitTransitionDuration='0s';
        logo_s.style.WebkitTransitionDuration='0s';
        logo_ma.style.WebkitTransitionDuration='0s';
        logo_mb.style.WebkitTransitionDuration='0s';
      }, 3000);
    
}

var flag = true;
function dropdown(){
  var top = document.getElementById("top_d");
  var mid = document.getElementById("mid_d");
  var bot = document.getElementById("bot_d");
  var dropdiv = document.getElementById("drop_div");

  top.style.WebkitTransitionDuration='.5s';
  mid.style.WebkitTransitionDuration='.25s';
  bot.style.WebkitTransitionDuration='.25s';
  
  
  if(flag){
    dropdiv.style.WebkitTransitionDuration='0s';
    dropdiv.style.opacity = 1;
    

    mid.style.transform = "translatey(-421%) skew(-40deg)";
    

    setTimeout(function(){
      dropdiv.style.WebkitTransitionDuration='1s';
      top.style.transform = "translatey(321%) skew(-40deg)";
      mid.style.transform = "translatey(321%) translatey(-321%) skew(-40deg)";
      bot.style.transform = "translatey(-421%) skew(-40deg)";
      dropdiv.style.transform = "translatey(0px)";
      top.style.opacity = 0;
    }, 250);
  
    mid.style.WebkitTransitionDuration='.5s';
    bot.style.WebkitTransitionDuration='.5s';

    setTimeout(function(){
      top.style.transform = "translatey(321%) rotate(45deg)";
      mid.style.transform = "translatey(0px) rotate(45deg)";
      bot.style.transform = "translatey(-321%) rotate(-45deg)";
    }, 500);
    setTimeout(function(){
      dropdiv.style.WebkitTransitionDuration='0s';
    }, 1000);
    
  }
  else{

    
    mid.style.WebkitTransitionDuration='.5s';
    bot.style.WebkitTransitionDuration='.5s';
    dropdiv.style.WebkitTransitionDuration='1s';
    
    top.style.transform = "translatey(321%) skew(-40deg)";
    mid.style.transform = "skew(-40deg)";
    bot.style.transform = "translatey(-321%) skew(-40deg)";
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
