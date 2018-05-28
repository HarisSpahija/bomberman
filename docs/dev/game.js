"use strict";
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.player = new Player;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
