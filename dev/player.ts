class Player {

    private div: HTMLElement;

    constructor() {
        console.log("player created")

        this.div = document.createElement("player"); 
        document.body.appendChild(this.div); 
    }
}
