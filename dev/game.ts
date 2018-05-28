class Game {

    private player: Player;
    private bomb: Bomb;

    constructor(){
        console.log("new game created!")

        this.player = new Player;
        this.bomb = new Bomb;
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