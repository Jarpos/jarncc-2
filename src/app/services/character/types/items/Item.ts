import { BaseItem_c } from "./BaseItem";

enum ItemType {
}

export class Item_c extends BaseItem_c {
    public type: ItemType;

    constructor(name: string, cost: number, type: ItemType, expl: string) {
        super(name, cost, expl);
        this.type = type;
    }
}
