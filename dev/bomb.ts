class Bomb {

    private x: number;
    private y: number;
    private div: HTMLElement;

    constructor(x: number, y: number) {
        console.log("bomb created") 
        this.x = x;
        this.y = y;
        
        this.div = document.createElement("bomb"); 
        document.body.appendChild(this.div); 
        this.div.style.transform = "translate("+this.x+"px,"+this.y+"px)";
    }
}