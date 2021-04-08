import { Injectable } from '@angular/core';

import { CharInfo_c } from "./types/CharInfo";
import { BaseValue_c, get_base_values } from "./types/BaseValue";
import { Talent_c, get_talents } from "./types/Talent";
import { Character_c } from './types/Character';
import { get_proficencies } from './types/Proficency';
import { get_origins } from './types/Origins';
import { get_finances } from './types/Finances';
import { get_items } from './types/items/Items';

@Injectable({
    providedIn: 'root'
})
export class CharacterService {

    public _character: Character_c = new Character_c();

    public _proficencies = get_proficencies();
    public _origins = get_origins();
    public _finances = get_finances();

    public _items = get_items();

    constructor() { }

}
