class Player {

    private div: HTMLElement;
    private x: number;
    private y: number;
    private speed: number;

    constructor() {
        console.log("player created")

        this.div = document.createElement("player"); 
        document.body.appendChild(this.div); 
        window.addEventListener("keydown", (e:KeyboardEvent) => this.onKeyDown(e));

        //set speed
        this.x = 0;
        this.y = 0;
        this.speed = 100;

        //event listener for player

        //Functions player peforms.
    }

    public update() : void {
        this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)";
    }

    private onKeyDown(event:KeyboardEvent):void {
        switch(event.keyCode){
            case 65: //A
            console.log(event.keyCode + " pressed");
                this.x = this.x-this.speed;
                console.log(this.x);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_side_left.png)"
                this.update();
                break;
            case 68: //D
            console.log(event.keyCode + " pressed");
                this.x = this.x+this.speed;
                console.log(this.x);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_side_right.png)"
                this.update();
                break;
            case 87: //W
                console.log(event.keyCode + " pressed");
                this.y = this.y-this.speed;
                console.log(this.y);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_up.png)"
                this.update();
                break;
            case 83: //S
                console.log(event.keyCode + " pressed");
                this.y = this.y+this.speed;
                console.log(this.y);
                this.div.style.backgroundImage = "url(../docs/images/player/idle_down.png)";
                this.update();
                break;    
        }
    }
}    
