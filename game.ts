class Game {
    constructor(){
        let p1 = player()
        let i1 = pickup()

        let pickedup = this.checkCollision(p1.getRectangle(), i1.getRectangle())
        console.log("You picked up a powerup")
        requestAnimationFrame(() => this.gameLoop());
    }

    private gameLoop() {
        let pickedup = this.checkCollision(p1.getRectangle(), i1.getRectangle())
        if(pickedup = true){
            pickup.buffer()
        }
        requestAnimationFrame(() => this.gameLoop());
    }

    checkCollision(a: ClientRect, b: ClientRect){
        return (a.left <= b.right &&
                b.left <= a.right &&
                a.top <= b.bottom &&
                b.top <= a.bottom)
    }
}