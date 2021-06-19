import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchAndFilterComponent } from './pages/home/components/search-and-filter/search-and-filter.component';
import { InputComponent } from './components/input/input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HttpClientModule } from '@angular/common/http';
import { CardCountryComponent } from './pages/home/components/card-country/card-country.component';
import { FormsModule } from '@angular/forms';
import { DetailCountryComponent } from './pages/detail-country/detail-country.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchAndFilterComponent,
    InputComponent,
    DropdownComponent,
    CardCountryComponent,
    DetailCountryComponent,
    ButtonComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
