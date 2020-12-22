import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CCharEditorComponent } from './pages/c-char-editor/c-char-editor.component';

const routes: Routes = [
    { path: "editor", component: CCharEditorComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
