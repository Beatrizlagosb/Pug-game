let personagem
let grama
let osso

let tamanho = 64

let andarX = 0
let andarY = 0

let velocidade = 64

let restart

let buttonUp
let buttonDown
let buttonLeft
let buttonRight

function setup() {
    createCanvas(576, 576)
    personagem = loadImage('assets/images/dog.png')
    grama = loadImage('assets/images/grass.png')
    osso = loadImage('assets/images/osso.png')


    buttonUp = createButton('Up')
    buttonUp.mousePressed(moveup)

    buttonDown = createButton('Down')
    buttonDown.mousePressed(moveDown)

    buttonLeft = createButton('Left')
    buttonLeft.mousePressed(moveLeft)

    buttonRight = createButton('Right')
    buttonRight.mousePressed(moveRight)
}

function draw() {

    if (andarX < 0) {
        andarX = 0
    }

    if (andarY < 0) {
        andarY = 0
    }

    // if (andarX > 576 - 64)
    // andarX < 576 - 64

    if (andarX > tamanho * 8) {
        andarX = tamanho * 8
    }

    // if (andarY > 576 - 64)
    // andarY < 576 - 64

    if (andarY > tamanho * 8) {
        andarY = tamanho * 8
    }

    background(220)

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(grama, tamanho * i, tamanho * j, tamanho, tamanho)
        }
    }

    image(personagem, andarX, andarY, tamanho, tamanho)

    image(osso, 512, 512, tamanho, tamanho)

    if (andarX === tamanho * 8 && andarY === tamanho * 8) {
        rect(160, 160, 256, 256, 50)
        textSize(35)
        text('Ganhou', 220, 300)

        restart = createButton('Reiniciar')
        restart.mousePressed(reset)

        noLoop()
    }
}

function moveup() {
    andary -= velocidade
}
function moveDown() {
    andary += velocidade
}
function moveLeft() {
    andarx -= velocidade
}
function moveRight() {
    andarx += velocidade
}

function reset() {
    andarX = 0
    andarY = 0
    restart.remove()
    loop()
}

function keyPressed() {
    if (keyIsDown(DOWN_ARROW)) {
        andarY += velocidade
    }

    if (keyIsDown(UP_ARROW)) {
        andarY -= velocidade
    }

    if (keyIsDown(LEFT_ARROW)) {
        andarX -= velocidade
    }

    if (keyIsDown(RIGHT_ARROW)) {
        andarX += velocidade
    }
}