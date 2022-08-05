function loadUp(){
    wrapDiv();
    var logo_conceal = document.getElementById("logo_conceal");
    var logo_wrapper = document.getElementById("logo_wrapper");
    var logo_a = document.getElementById("logo_bg_a");
    var logo_ma = document.getElementById("logo_bg_ma");
    var logo_mb = document.getElementById("logo_bg_mb");
    var logo_s = document.getElementById("logo_bg_s");

    var top_arr = document.getElementById("top");
    var mid_arr = document.getElementById("mid");
    var bot_arr = document.getElementById("bot");

    logo_conceal.style.transitionDuration='3s';
    logo_wrapper.style.transitionDuration='1.8s';
    logo_a.style.transitionDuration='2s';
    logo_s.style.transitionDuration='2s';
    logo_ma.style.transitionDuration='2s';
    logo_mb.style.transitionDuration='2s';
    top_arr.style.transitionDuration='2s';
    mid_arr.style.transitionDuration='2s';
    bot_arr.style.transitionDuration='2s';

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

        logo_conceal.style.transitionDuration='0s';
        logo_wrapper.style.transitionDuration='0s';
        logo_a.style.transitionDuration='0s';
        logo_s.style.transitionDuration='0s';
        logo_ma.style.transitionDuration='0s';
        logo_mb.style.transitionDuration='0s';
      }, 3000);
    
}

var flag = true;
function dropdown(){
  var top = document.getElementById("top_d");
  var mid = document.getElementById("mid_d");
  var bot = document.getElementById("bot_d");
  var dropdiv = document.getElementById("drop_div");
  var button = document.getElementById("dropdownmenu");

  button.disabled = true;
  
  dropdiv.style.transitionDuration='.5s';
  
  if(flag){
    document.body.style.overflowY = 'hidden';
    dropdiv.style.opacity = 1;
    
    dropdiv.style.transform = "translatey(0px)";
    top.classList.remove('slide-top-out');
    top.classList.add('slide-top-in');
    mid.classList.remove('rotate-mid2');
    mid.classList.add('rotate-mid');
    bot.classList.remove('animate-bottom2');
    bot.classList.add('animate-bottom');

  }
  else{
    
    top.classList.remove('slide-top-in');
    top.classList.add('slide-top-out');
    mid.classList.remove('rotate-mid')
    mid.classList.add('rotate-mid2')
    bot.classList.remove('animate-bottom');
    bot.classList.add('animate-bottom2');
    document.body.style.overflowY = 'auto';
    dropdiv.style.transform = "translatey(-100%)"

  }
  setTimeout(function(){
    button.disabled = false;
  }, 500);
  flag = !flag;
} 
