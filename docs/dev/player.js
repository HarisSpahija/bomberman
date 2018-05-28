"use strict";
var Player = /** @class */ (function () {
    function Player() {
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.y = 100;
        this.x = 100;
    }
    return Player;
}());
