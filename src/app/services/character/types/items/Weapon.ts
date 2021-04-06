import { BaseItem } from "./BaseItem";

export enum WeaponType {
    EH_Stich = "Einhand Stich",
    EH_Hieb = "Einhand Hieb",
    EH_Wurf = "Einhand Wurf",
    EH_Kette = "Einhand Kette",

    ZH_Hieb = "Zweihand Hieb",
    ZH_Stange = "Zweihand Stange",
    ZH_Bogen = "Zweihand Bogen",
    ZH_Armbrust = "Zweihand Armbrust",
}

export class Weapon extends BaseItem {
    public type: WeaponType;

    constructor(name: string, cost: number, type: WeaponType, expl: string) {
        super(name, cost, expl);
        this.type = type;
    }
}
