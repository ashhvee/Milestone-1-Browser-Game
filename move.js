let stickmanBottom = 0
let maxHeight = 300

function jump(){
    var stickman = document.getElementById("stickman");
    // document.addEventListener("click", jump);
    console.log("entering a jump function")
    let upInterval = setInterval(() => {
        if(stickmanBottom >= maxHeight ){
            clearInterval(upInterval)
            fall()
        }
        stickmanBottom += 10
        stickman.style.bottom = `${stickmanBottom}px`
    },100)
}

function fall(){
    var stickman = document.getElementById("stickman");
    let downInterval = setInterval(() => {
        if(stickmanBottom <= 10 ){
            clearInterval(downInterval)
        }
        stickmanBottom -= 10
        stickman.style.bottom = `${stickmanBottom}px`
    },100)
}