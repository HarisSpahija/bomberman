class Game {

    constructor(){
        console.log("new game created!")

        let p = new Player()
        let b = new Bomb()
    }

    createElements() {
        
        
    }
}


// load
window.addEventListener("load", function () {
    new Game()
});