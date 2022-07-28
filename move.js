let stickmanBottom = 0
let maxHeight = 50
var speed = 7

// stickman automatically runs right
moveStickman = function(moveRight) {
    var stickman = document.getElementById("stickman")
    var obstaclesArray = document.querySelectorAll(".obst")
    // console.log("moving")
        left = stickman.offsetLeft
      
    if ((moveRight > 0 && left > 0) || (moveRight < 0 && left < 0)) {
        clearTimeout(timer)
        timer = setInterval(function() {
            moveStickman(moveRight)
            obstaclesArray.forEach(e => {
            detectCollision(document.getElementById("stickman"), e);
            })
        }, speed)
    }
        stickman.style.left = left + moveRight + "px"
}
    var timer = setInterval(
        function() { 
            moveStickman(1.3)
        }, speed)
    
// stickman jumps
function jump(){
    var stickman = document.getElementById("stickman")
    // console.log("entering a jump function")
    let upInterval = setInterval(() => {
        if(stickmanBottom >= maxHeight ){
            clearInterval(upInterval)
            fall()
        }
        stickmanBottom += 32
        stickman.style.bottom = `${stickmanBottom}px`
    },100)
}

// stickman returning to floor after jump
function fall(){
    var stickman = document.getElementById("stickman")
    let downInterval = setInterval(() => {
        if(stickmanBottom <= 10 ){
            clearInterval(downInterval)
        }
        stickmanBottom -= 25
        stickman.style.bottom = `${stickmanBottom}px`
    },100)
}

// // collision detection
const stickmanBox = document.getElementById("stickman").getBoundingClientRect()
const obstaclesBox = document.getElementById("obstacles").getBoundingClientRect()

function detectCollision(stickman, obstacles) {
    console.log(stickman.offsetTop)
    console.log(obstacles.offsetTop)
    if ((
    stickman.offsetTop > (obstacles.offsetTop - 50)  &&
    stickman.offsetLeft > (obstacles.offsetLeft - 40)
    ) )
    {window.alert("You lose!")}
}