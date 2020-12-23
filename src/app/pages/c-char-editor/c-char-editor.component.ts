import { Component, OnInit } from '@angular/core';

import { CharacterService } from 'src/app/services/character/character.service';

@Component({
    selector: 'app-c-char-editor',
    templateUrl: './c-char-editor.component.html',
    styleUrls: ['./c-char-editor.component.scss']
})
export class CCharEditorComponent implements OnInit {

    public characterService: CharacterService;

    constructor() {
        this.characterService = new CharacterService();
    }

    ngOnInit(): void { }

    public log() {
        console.log(this.characterService._characters[0]);
    }

}
