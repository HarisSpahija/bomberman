"use strict";
var Bomb = (function () {
    function Bomb() {
        console.log("bomb created");
        this.div = document.createElement("bomb");
        document.body.appendChild(this.div);
    }
    return Bomb;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        var p = new Player();
        var b = new Bomb();
    }
    Game.prototype.createElements = function () {
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Player = (function () {
    function Player() {
        console.log("player created");
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
    }
    return Player;
}());
//# sourceMappingURL=main.js.map