import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ButtonComponent,
        DropdownComponent,
        HeaderComponent,
        InputComponent,
        LoadingComponent
    ],
    imports: [
        FormsModule,
        CommonModule
    ],
    exports: [
        ButtonComponent,
        DropdownComponent,
        HeaderComponent,
        InputComponent,
        LoadingComponent
    ]
})
export class SharedModule { }
