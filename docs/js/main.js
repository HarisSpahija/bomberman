"use strict";
var Bomb = (function () {
    function Bomb(x, y) {
        console.log("bomb created");
        this.x = x;
        this.y = y;
        this.div = document.createElement("bomb");
        document.body.appendChild(this.div);
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    }
    return Bomb;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        this.player = new Player;
    }
    Game.prototype.gameLoop = function () {
        this.player.update();
        requestAnimationFrame(this.gameLoop.bind(this));
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Player = (function () {
    function Player() {
        var _this = this;
        console.log("player created");
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.x = 0;
        this.y = 0;
        this.speed = 100;
    }
    Player.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px," + this.y + "px)";
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 65:
                console.log(event.keyCode + " pressed");
                this.x = this.x - this.speed;
                console.log(this.x);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_side_left.png)";
                this.update();
                break;
            case 68:
                console.log(event.keyCode + " pressed");
                this.x = this.x + this.speed;
                console.log(this.x);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_side_right.png)";
                this.update();
                break;
            case 87:
                console.log(event.keyCode + " pressed");
                this.y = this.y - this.speed;
                console.log(this.y);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_up.png)";
                this.update();
                break;
            case 83:
                console.log(event.keyCode + " pressed");
                this.y = this.y + this.speed;
                console.log(this.y);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_down.png)";
                this.update();
                break;
            case 32:
                console.log(event.keyCode + " pressed");
                this.placeBomb();
                break;
        }
    };
    Player.prototype.placeBomb = function () {
        new Bomb(this.x, this.y);
    };
    return Player;
}());
//# sourceMappingURL=main.js.map