function setup(p) {
    p.createCanvas(1000, 600)
    p.background(200 , 200 , 100)
}

//function draw(p) {
//
//}

function sketch(p) {
    p.setup = () => setup(p)

    // p.draw = () => draw(p)
}

export default sketch
