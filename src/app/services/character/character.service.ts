import { Injectable } from '@angular/core';

import { CharInfo_c } from "./types/CharInfo";
import { BaseValue_c, get_base_values } from "./types/BaseValue";
import { Talent_c, get_talents } from "./types/Talent";
import { Character_c } from './types/Character';
import { get_proficencies } from './types/Proficency';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    public _character: Character_c = new Character_c();
    public _proficencies = get_proficencies();

    constructor() { }

}
