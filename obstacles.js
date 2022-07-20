function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}

move(newImage('assets/spikes.png')).to(200, 450)
move(newImage('assets/stickman.gif')).to(350, 250)