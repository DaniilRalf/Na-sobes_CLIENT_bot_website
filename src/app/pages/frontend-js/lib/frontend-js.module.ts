import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendJsComponent } from '../model/frontend-js.component';
import {FrontendJsRoutingModule} from "./frontend-js-routing.module"

@NgModule({
  declarations: [
    FrontendJsComponent
  ],
  imports: [
    CommonModule,
    FrontendJsRoutingModule,
  ],
})
export class FrontendJsModule { }
