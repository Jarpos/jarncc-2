import { Injectable } from '@angular/core';

import { CharInfo_c } from "./types/CharInfo";
import { BaseValue_c, get_base_values } from "./types/BaseValue";
import { Talent_c, get_talents } from "./types/Talent";
import { Character_c } from './types/Character';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    public _characters: Character_c[] = [
        new Character_c(),
    ];

    constructor() { }

}
