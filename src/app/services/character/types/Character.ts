import { CharInfo_c } from "./CharInfo";
import { BaseValue_c, get_base_values } from "./BaseValue";
import { Talent_c, get_talents } from "./Talent";

export class Character_c {
    /**
     * @param c character information
     */
    constructor(c: CharInfo_c) {
        this._information = c;
    }

    public _information: CharInfo_c = new CharInfo_c();
    public _baseValues: Map<string, BaseValue_c> = get_base_values();
    public _talents: Map<string, Talent_c> = get_talents();
}
