import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPlaceComponent } from './places/select-place/select-place.component';
import { SandboxPlaceComponent } from './places/sandbox-place/sandbox-place.component';
import { TestingPlaceComponent } from './places/testing-place/testing-place.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import { SelectCustomComponent } from './widgets/select-custom/select-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPlaceComponent,
    SandboxPlaceComponent,
    TestingPlaceComponent,
    SelectCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,

    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
