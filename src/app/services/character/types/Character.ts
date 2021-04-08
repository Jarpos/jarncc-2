import { CharInfo_c, get_char_infos } from "./CharInfo";
import { BaseValue_c, get_base_values, get_base_values_index } from "./BaseValue";
import { Talent_c, get_talents } from "./Talent";
import { Proficency_c } from "./Proficency";
import { Origin_c } from "./Origins";
import { calc_from_base, Factors_c } from "./CalculateFromBase";
import { CalculatedTalents_c, get_calculated_talents } from "./CalculatedTalents";
import { Weapon } from "./items/Weapon";
import { Item } from "./items/Item";
import { Finance_c } from "./Finances";

export class Character_c {
    constructor() { }

    public _information: CharInfo_c<number | string>[] = get_char_infos();
    public _baseValues: BaseValue_c[] = get_base_values();
    public _talents: Talent_c[] = get_talents();
    public _calcTalents: CalculatedTalents_c[] = get_calculated_talents(this);
    public _inventory = {
        finance: new Finance_c("", 0),
        items: Array<Item>(),
        weapons: Array<Weapon>(),
    };

    public get basePointsSum(): number {
        let s = 0;
        this._baseValues.forEach(val => s += val.value);
        return s;
    }

    public get talentPointsCostSum(): number {
        let s = 0;
        this._calcTalents.forEach(val => s += val.cost);
        this._talents.forEach(val => s += val.cost);
        return s;
    }

    public _proficency: Proficency_c = new Proficency_c("", 0, 0, 0, 0);
    public get basePoints(): number { return this._proficency.BasePoints; }
    public get maxBasePoints(): number { return this._proficency.MaxBasePoints; }

    public get talentPoints(): number { return this._proficency.TalentPoints; }
    public get maxTalentPoints(): number { return this._proficency.MaxTalentPoints; }


    public _origin: Origin_c = new Origin_c("", 0);

    public get health(): number {
        return calc_from_base(new Factors_c(0.0, 1.0, 0.0, 0.0, 2.0, 1.0), this._baseValues) +
               this._origin.extraHitPoints;
    }

    public get initiative(): number {
        return calc_from_base(new Factors_c(1.0, 1.0, 0.5, 0.0, 0.0, 0.0), this._baseValues);
    }

    public get initiative_level(): number {
        var ini = this.initiative;
        if (ini <= 10) return 6;
        if (ini <= 19) return 5;
        if (ini <= 25) return 4;
        if (ini <= 34) return 3;
        if (ini <= 42) return 2;
        /*(ini <= 50)*/return 1;
    }
}
