export class BaseItem {
    public name: string;
    public cost: number;
    public expl: string;

    constructor(name: string, cost: number, expl: string) {
        this.name = name;
        this.cost = cost;
        this.expl = expl;
    }
}
