let stickmanBottom = 0
let maxHeight = 50
var speed = 7

// stickman automatically runs right
moveStickman = function(moveRight) {
    var stickman = document.getElementById("stickman")
    // console.log("moving")
        left = stickman.offsetLeft
      
    if ((moveRight > 0 && left > 0) || (moveRight < 0 && left < 0)) {
        clearTimeout(timer)
        timer = setInterval(function() {
            moveStickman(moveRight)
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
const stickman = document.getElementById("stickman").getBoundingClientRect()
const obstacles = document.getElementById("obstacles").getBoundingClientRect()

function detectCollision(stickman, obstacles) {
    return !(
    stickman.bottom < obstacles.top(window.alert("You lose!")) ||
    stickman.right < obstacles.left(window.alert("You lose!"))
    ) 
}

// if (stickman.bottom < obstacles.top ||
//     stickman.right < obstacles.left
// ){
//     window.alert("You lose!")
// }   else {
    
// }