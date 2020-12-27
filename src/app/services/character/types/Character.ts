import { CharInfo_c, get_char_infos } from "./CharInfo";
import { BaseValue_c, get_base_values, get_base_values_index } from "./BaseValue";
import { Talent_c, get_talents } from "./Talent";
import { Proficency_c } from "./Proficency";
import { Origin_c } from "./Origins";

export class Character_c {
    constructor() { }

    public _information: CharInfo_c<number | string>[] = get_char_infos();
    public _baseValues: BaseValue_c[] = get_base_values();
    public _talents: Talent_c[] = get_talents();

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


    public _origin: Origin_c = new Origin_c("", 0);

    /**
     * Return value is __always__ floored
     * @param TA Tapferkeit
     * @param FL Flinkheit
     * @param FF Fingerfertigkeit
     * @param IN Intuition
     * @param GH Gesundheit
     * @param KR Kraft
     */
    private calculate_from_base(TA: number, FL: number, FF: number, IN: number, GH: number, KR: number): number {
        var map = get_base_values_index();
        return Math.floor(
                TA * this._baseValues[map.get("TA")!].value +
                FL * this._baseValues[map.get("FL")!].value +
                FF * this._baseValues[map.get("FF")!].value +
                IN * this._baseValues[map.get("IN")!].value +
                GH * this._baseValues[map.get("GH")!].value +
                KR * this._baseValues[map.get("KR")!].value
            );
    }

    public get health(): number {
        return this.calculate_from_base(0.0, 1.0, 0.0, 0.0, 2.0, 1.0) +
               this._origin.extraHitPoints;
    }

    public get initiative(): number {
        return this.calculate_from_base(1.0, 1.0, 0.5, 0.0, 0.0, 0.0);
    }

    public get dodge(): number {
        return this.calculate_from_base(0.5, 1.5, 1.0, 1.0, 0.5, 0.5);
    }

    public get dodge_cap(): number {
        return this.calculate_from_base(1.0, 2.0, 1.5, 1.5, 1.0, 1.0);
    }

    public get parry(): number {
        return this.calculate_from_base(1.5, 1.0, 0.5, 0.5, 0.5, 1.0);
    }

    public get parry_cap(): number {
        return this.calculate_from_base(2.0, 1.5, 1.0, 1.0, 1.0, 1.5);
    }
}
