import { BaseItem } from "./BaseItem";

enum ItemType {
}

export class Item extends BaseItem {
    public type: ItemType;

    constructor(name: string, cost: number, type: ItemType, expl: string) {
        super(name, cost, expl);
        this.type = type;
    }
}
