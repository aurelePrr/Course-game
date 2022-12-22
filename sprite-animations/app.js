let playerState = 'run'
const dropdown = document.getElementById('animations')
dropdown.addEventListener('change', function(e) {
    playerState = e.target.value
})

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600

const playerImage = new Image()
playerImage.src = 'images/shadow_dog.png'
const spriteWidth = 575
const spriteHeight = 523

let gameFrame = 0
const staggerFrames = 7
const spriteAnimations = []
const animationStates = [
    {
        name: 'idle',
        frames: 7, 
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'gethit',
        frames: 4,
    },
]
animationStates.forEach((state, index) => {
    let frames = {
        loc:[],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth
        let positionY = index * spriteHeight
        frames.loc.push({x: positionX, y: positionY})
    }
    spriteAnimations[state.name] = frames
})

function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length /* CALCUL POUR BOUCLER DE 1 EN 1 JUSQU A 6. ON IGNORE
    LES 4 PREMIERS TOURS DE BOUCLE CAR ILS RENVOIENT MOINS DE 1 DONC PAS 1 ENTIER 
    (1/5) = 0.2             renvoi 0                    0 % 6 =0
    (2/5) % 6 = 0.4         renvoi 0                    0 % 6 =0
    (3/5) % 6 = 0.6         renvoi 0                    0 % 6 =0
    (4/5) % 6 = 0.8         renvoi 0                    0 % 6 = 
    (5/5) % 6 = 1           renvoi 1                    1 % 6 = 1   NE RETOURNE UN CHIFFRE QU A CE MOMENT LA A CAUSE DE MATH FLOOR
                                                        2 % 6 = 2
                                                        3 % 6 = 3
                                                        ect...
    */
    let frameX = spriteWidth * position
    let frameY = spriteAnimations[playerState].loc[position].y
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight)


    gameFrame++
    requestAnimationFrame(animate)
}

animate()


