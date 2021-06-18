// Librerias de node_modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor/interceptor.service';

// Servicios

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    ]
})
export class CoreModule { }
