import { BaseItem_c } from "./BaseItem";

export enum ItemType {
    Apparel        = "Kleidung",
    Animal         = "Tierbegleiter",
    AnimalExtra    = "Tierzubehör",
    // ArmorServices = "Rüstung ausbeulen",
    Messenger      = "Bote pro Tag",
    // WeaponServices = "Klingen schärfen",
    Mercenary      = "Söldner pro Tag",
    Food           = "Verpflegung",
    Tent           = "Unterbringung",
    Backpacks      = "Transport",
    BaseObject     = "Basisobjekt",
    AdvancedObject = "Erweiterte Objekte"
}

export class Item_c extends BaseItem_c {
    public type: ItemType;

    constructor(name: string, cost: number, type: ItemType, expl?: string) {
        super(name, cost, expl);
        this.type = type;
    }
}
