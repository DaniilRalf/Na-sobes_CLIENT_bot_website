import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPlaceComponent } from './places/select-place/select-place.component';
import { SandboxPlaceComponent } from './places/sandbox-place/sandbox-place.component';
import { TestingPlaceComponent } from './places/testing-place/testing-place.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPlaceComponent,
    SandboxPlaceComponent,
    TestingPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
