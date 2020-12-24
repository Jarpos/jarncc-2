import { CharInfo_c, get_char_infos } from "./CharInfo";
import { BaseValue_c, get_base_values } from "./BaseValue";
import { Talent_c, get_talents } from "./Talent";

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

    private _maxBasePoints: number = 5;
    public set maxBasePoints(n: number) { this._maxBasePoints = n; }
    public get maxBasePoints(): number { return this._maxBasePoints; }
}
