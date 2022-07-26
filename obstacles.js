const stickman = document.getElementById("stickman").getBoundingClientRect();
const obstacles = document.getElementById("obstacles").getBoundingClientRect();

console.log("stickman", stickman)

function detectCollision(player, obstacle) {
    return !(
            player.bottom < obstacle.top ||
            player.top > obstacle.bottom ||
            player.right < obstacle.left ||
            player.left > obstacle.right
        ) 
}

console.log(detectCollision(stickman))