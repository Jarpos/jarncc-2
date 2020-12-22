import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCharEditorComponent } from './c-char-editor.component';

describe('CCharEditorComponent', () => {
    let component: CCharEditorComponent;
    let fixture: ComponentFixture<CCharEditorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CCharEditorComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CCharEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
