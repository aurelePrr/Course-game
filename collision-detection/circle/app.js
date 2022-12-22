let circle1 = {x: 10, y: 10, radius: 300}
let circle2 = {x: 500, y: 500, radius: 150}

let dx = circle2.x - circle1.x
let dy = circle2.y - circle1.y
let distance = Math.sqrt(dx * dx + dy * dy)
let sumOfRadii = circle1.radius + circle2.radius

if(distance < sumOfRadii) {
    /* CIRCLES COLLIDE */
} else if (distance === sumOfRadii) {
    /* CIRCLES TOUCH */
} else if (distance > sumOfRadii) {
    /* NO COLLISION */
}





