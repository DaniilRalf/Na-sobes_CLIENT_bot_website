import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendVueComponent } from '../model/frontend-vue.component';
import {FrontendVueRoutingModule} from "./frontend-vue.routing.module"

@NgModule({
  declarations: [
    FrontendVueComponent
  ],
  imports: [
    CommonModule,
    FrontendVueRoutingModule
  ],
})
export class FrontendVueModule { }
