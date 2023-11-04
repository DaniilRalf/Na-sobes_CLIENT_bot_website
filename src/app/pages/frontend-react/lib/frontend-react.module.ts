import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendReactComponent } from '../model/frontend-react.component';
import {FrontendReactRoutingModule} from "./frontend-react.routing.module"

@NgModule({
  declarations: [
    FrontendReactComponent
  ],
  imports: [
    CommonModule,
    FrontendReactRoutingModule
  ],
})
export class FrontendReactModule { }
