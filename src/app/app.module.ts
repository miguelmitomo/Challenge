import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Login/login.component'
import { TableComponent } from './Table/table.component';
import { HeaderComponent } from './Header/header-component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormatNifDirective } from './directives/format-nif.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    HeaderComponent,
    FormatNifDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
