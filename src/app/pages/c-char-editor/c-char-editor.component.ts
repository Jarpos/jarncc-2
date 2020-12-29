import { Component, OnInit } from '@angular/core';

import { CharacterService } from 'src/app/services/character/character.service';
import { Character_c } from 'src/app/services/character/types/Character';

@Component({
    selector: 'app-c-char-editor',
    templateUrl: './c-char-editor.component.html',
    styleUrls: ['./c-char-editor.component.scss']
})
export class CCharEditorComponent implements OnInit {

    public characterService: CharacterService;
    public character;

    constructor() {
        this.characterService = new CharacterService();
        this.character = this.characterService._character
    }

    ngOnInit(): void { }

    public log() {
        console.log(this.characterService._character);
    }

    public increment(e: MouseEvent, i: any, param: string): void {
        console.log(e);
        console.log(i);
        i[param] += e.shiftKey ? 5 : 1;
    }

    public decrement(e: MouseEvent, i: any, param: string): void {
        console.log(e);
        console.log(i);
        i[param] -= e.shiftKey ? 5 : 1;
    }


    // Does not work yet
    public textArea: string = "";
    public export() { this.textArea = JSON.stringify(this.character); }
    public import() { this.character = (JSON.parse(this.textArea) as Character_c); }

}
