import { CharInfo_c, get_char_infos } from "./CharInfo";
import { BaseValue_c, get_base_values } from "./BaseValue";
import { Talent_c, get_talents } from "./Talent";
import { get_proficencies, Proficency_c } from "./Proficency";

export class Character_c {
    constructor() { }

    public _information: Map<string, CharInfo_c<number | string>> = get_char_infos();
    public _baseValues: Map<string, BaseValue_c> = get_base_values();
    public _talents: Map<string, Talent_c> = get_talents();

    public get basePointsSum(): number {
        let s = 0;
        this._baseValues.forEach(val => s += val.value);
        return s;
    }

    public get talentPointsCostSum(): number {
        let s = 0;
        this._talents.forEach(val => s += val.cost)
        return s;
    }

    public _proficency: Proficency_c = new Proficency_c("", 0, 0, 0, 0);
    public get basePoints(): number { return this._proficency.BasePoints; }
    public get maxBasePoints(): number { return this._proficency.MaxBasePoints; }

    public get talentPoints(): number { return this._proficency.TalentPoints; }
    public get maxTalentPoints(): number { return this._proficency.MaxTalentPoints; }
}
