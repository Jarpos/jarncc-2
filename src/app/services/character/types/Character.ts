import { CharInfo_c, get_char_infos } from "./CharInfo";
import { BaseValue_c, get_base_values } from "./BaseValue";
import { Talent_c, get_talents } from "./Talent";

export class Character_c {
    constructor() { }

    public _information: Map<string, CharInfo_c<number | string>> = get_char_infos();
    public _baseValues: Map<string, BaseValue_c> = get_base_values();
    public _talents: Map<string, Talent_c> = get_talents();
}
