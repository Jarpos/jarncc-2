import { BaseValue_c, get_base_values_index } from "./BaseValue";

// Basically an interface, but I wanted the constructor so I did a class
// (Not the most elegant solution, but it's not like anything here is the
// most elegant solution...)
export class Factors_c {
    constructor(TA: number, FL: number, FF: number, IN: number, GH: number, KR: number) {
        this.TA = TA;
        this.FL = FL;
        this.FF = FF;
        this.IN = IN;
        this.GH = GH;
        this.KR = KR;
    }

    public TA: number;
    public FL: number;
    public FF: number;
    public IN: number;
    public GH: number;
    public KR: number;
}

/**
 * Return value is __always__ floored
 * @param TA Tapferkeit
 * @param FL Flinkheit
 * @param FF Fingerfertigkeit
 * @param IN Intuition
 * @param GH Gesundheit
 * @param KR Kraft
 */
export function calc_from_base(f: Factors_c, b: BaseValue_c[]): number {
    var map = get_base_values_index();
    return Math.floor(
        f.TA * b[map.get("TA")!].value +
        f.FL * b[map.get("FL")!].value +
        f.FF * b[map.get("FF")!].value +
        f.IN * b[map.get("IN")!].value +
        f.GH * b[map.get("GH")!].value +
        f.KR * b[map.get("KR")!].value
    );
}
