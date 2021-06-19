import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SearchAndFilterComponent } from './pages/home/components/search-and-filter/search-and-filter.component';
import { InputComponent } from './shared/components/input/input.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { CardCountryComponent } from './pages/home/components/card-country/card-country.component';
import { FormsModule } from '@angular/forms';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchAndFilterComponent,
    CardCountryComponent,
    DetailCountryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
