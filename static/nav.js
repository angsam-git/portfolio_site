function nextSlide(pnum){
  var radio;
  switch(pnum){
    case(0):
      radio = document.getElementById("r0");
      if (radio.checked)
        document.getElementById("r1").checked = true;
      else
        document.getElementById("r2").checked = true
      break;
    case(1):
      radio = document.getElementById("r3");
      if (radio.checked)
        document.getElementById("r4").checked = true;
      else
        document.getElementById("r5").checked = true
      break;
    case(2):
      radio = document.getElementById("r6");
      if (radio.checked)
        document.getElementById("r7").checked = true;
      else
        document.getElementById("r8").checked = true
      break;
    case(3):
      radio = document.getElementById("r9");
      if (radio.checked)
        document.getElementById("r10").checked = true;
      else
        document.getElementById("r11").checked = true
      break;
  }
}

function prevSlide(pnum){
  var radio;
  switch(pnum){
    case(0):
      radio = document.getElementById("r2");
      if (radio.checked)
        document.getElementById("r1").checked = true;
      else
        document.getElementById("r0").checked = true;
      break;
    case(1):
      radio = document.getElementById("r5");
      if (radio.checked)
        document.getElementById("r4").checked = true;
      else
        document.getElementById("r3").checked = true;
      break;
    case(2):
      radio = document.getElementById("r8");
      if (radio.checked)
        document.getElementById("r7").checked = true;
      else
        document.getElementById("r6").checked = true;
      break;
    case(3):
      radio = document.getElementById("r11");
      if (radio.checked)
        document.getElementById("r10").checked = true;
      else
        document.getElementById("r9").checked = true;
      break;
  }
}