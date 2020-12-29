import { get_base_values_index } from "./BaseValue";
import { calc_from_base, Factors_c } from "./CalculateFromBase";
import { Character_c } from "./Character";
import { difficulties } from "./Talent";

export class CalculatedTalents_c {
    /**
     * @param n name
     * @param TA Tapferkeit
     * @param FL Flinkheit
     * @param FF Fingerfertigkeit
     * @param IN Intuition
     * @param GH Gesundheit
     * @param KR Kraft
     * @param _this reference to parent object
     * @param expl explanation string
     */
    constructor(n: string, base: Factors_c, cap: Factors_c | null, _this: Character_c, expl: string) {
        this.name = n;
        this.explanation = expl,
        this.parent = _this;

        this._base = base;
        this._cap = cap;
    }

    public name: string = "";
    public explanation: string = "";

    private _difficulty: difficulties = 2;
    public get difficulty(): string {
        // 65 is A, so we use +64 to force at least a 65
        return String.fromCharCode(this._difficulty + 64);
    }

    private parent: Character_c;

    // Factors that the base is multiplied by
    private _base: Factors_c;
    private _cap: Factors_c | null;

    public get basePoints(): number {
        return calc_from_base(this._base, this.parent._baseValues);
    }
    public get capPoints(): number {
        if (this._cap === null) {
            return 100;
        } else {
            return calc_from_base(this._cap, this.parent._baseValues);
        }
    }

    private _extraPoints: number = 0;
    public get extraPoints(): number { return this._extraPoints; }
    public set extraPoints(n: number) {
        if (n >= 0 && this.basePoints + n <= this.capPoints) {
            this._extraPoints = n;
        }
    }
    public get cost(): number {
        return this._extraPoints * this._difficulty;
    }
    public get allPoints(): number {
        return this._extraPoints + this.basePoints;
    }
}


export function get_calculated_talents(_this: Character_c): CalculatedTalents_c[] {
    const wtal = // Weapon talent
        (KR: number, GH: number, FL: number, FF: number) => {
            return new Factors_c(0.0, FL, FF, 0.0, GH, KR);
        };

    return [
        new CalculatedTalents_c("Ausweichen", new Factors_c(0.5, 1.5, 1.0, 1.0, 0.5, 0.5),
                                              new Factors_c(1.0, 2.0, 1.5, 1.5, 1.0, 1.0),
                                              _this, "Wie gut man im Kampf ausweichen kann"),
        new CalculatedTalents_c("Parieren",   new Factors_c(1.5, 1.0, 0.5, 0.5, 0.5, 1.0),
                                              new Factors_c(2.0, 1.5, 1.0, 1.0, 1.0, 1.5),
                                              _this, "Wie gut man parieren kann"),

        // One-handed-weapons
        new CalculatedTalents_c("Hiebwaffen",   wtal(1.0, 0.5, 1.5, 1.0),
                                                null, _this, "Einhändige Hiebwaffe"),
        new CalculatedTalents_c("Stichwaffen",  wtal(1.0, 1.0, 1.5, 0.5),
                                                null, _this, "Einhändige Stichwaffe"),
        new CalculatedTalents_c("Wurfwaffen",   wtal(0.0, 1.0, 0.5, 1.5),
                                                null, _this, "Einhändige Wurfwaffen"),
        new CalculatedTalents_c("Kettenwaffen", wtal(1.0, 1.0, 1.5, 0.5),
                                                null, _this, "Einhändige Kettenwaffen"),

        // Two-handed-weapons
        new CalculatedTalents_c("Hiebwaffen",    wtal(2.0, 1.0, 1.0, 0.5),
                                                 null, _this, "Zweihändige Hiebwaffen"),
        new CalculatedTalents_c("Stangenwaffen", wtal(2.0, 1.0, 1.0, 0.5),
                                                 null, _this, "Zweihändige Stangenwaffen"),
        new CalculatedTalents_c("Bogen",         wtal(0.0, 1.0, 1.0, 1.5),
                                                 null, _this, "Zweihändiger Bogen"),
        new CalculatedTalents_c("Armbrüste",     wtal(1.0, 0.5, 1.0, 1.5),
                                                 null, _this, "Zweihändige Armbrust"),
    ];
}
