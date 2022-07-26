let stickmanBottom = 0
let maxHeight = 50
var speed = 6
    
moveStickman = function(moveBy) {
    var stickman = document.getElementById('stickman'),
        left = stickman.offsetLeft;
      
    if ((moveBy > 0 && left > 800) || (moveBy < 0 && left < 800)) {
        clearTimeout(timer);
        timer = setInterval(function() {
            moveStickman(moveBy);
        }, speed);
      }
      
      stickman.style.left = left + moveBy + 'px';
    };
  
var timer = setInterval(
  function() { 
    moveStickman(1); 
  }
  , speed);

function jump(){
    var stickman = document.getElementById("stickman");
    // document.addEventListener("click", jump);
    console.log("entering a jump function")
    let upInterval = setInterval(() => {
        if(stickmanBottom >= maxHeight ){
            clearInterval(upInterval)
            fall()
        }
        stickmanBottom += 25
        stickman.style.bottom = `${stickmanBottom}px`
    },100)
}

function fall(){
    var stickman = document.getElementById("stickman");
    let downInterval = setInterval(() => {
        if(stickmanBottom <= 10 ){
            clearInterval(downInterval)
        }
        stickmanBottom -= 25
        stickman.style.bottom = `${stickmanBottom}px`
    },100)
}