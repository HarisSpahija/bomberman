class Player {
    private x: number;
    private y: number;
    private div: HTMLElement;

constructor() {
    this.div = document.createElement("player");
    document.body.appendChild(this.div);
    
    this.y = 100;
    this.x = 100;
    }
}