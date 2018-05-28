class Game {

    private player: Player;
    
    constructor(){
        console.log("new game created!")

        this.player = new Player;
    }

    private gameLoop(){ 
        this.player.update();    
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}


// load
window.addEventListener("load", function () {
    new Game()
});