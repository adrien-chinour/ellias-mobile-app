import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CreateAliasPage} from './create-alias.page';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '',
                component: CreateAliasPage
            }
        ])
    ],
    declarations: [CreateAliasPage]
})
export class CreateAliasPageModule {
}