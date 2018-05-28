class Bomb {

    private div: HTMLElement;

    constructor() {
        console.log("bomb created")

        this.div = document.createElement("bomb"); 
        document.body.appendChild(this.div); 
    }
}