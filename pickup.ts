class pickup {
    private div: HTMLElement;
    private game: Game;
    private itemnmb: number = Math.floor(Math.random()*3);
    private itemid: string = "itemid" + this.itemnmb;

    constructor(g: Game) {
        this.game = g;
        this.div = document.createElement("div")
        this.div.setAttribute("id", this.itemid)
        document.body.appendChild(this.div)
    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }

    private buff(nmb: number){
        switch(nmb){
            case 0:
                player.bombrange += 1
                break
            case 1:
                player.bombmax +=1
                break;
            case 2:
                player.speed +=1
                break;
        }
    }

    public buffer(){
        this.buff(this.itemnmb)
    }
}