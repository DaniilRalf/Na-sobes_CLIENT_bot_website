import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendAngularComponent } from '../model/frontend-angular.component';
import {FrontendAngularRoutingModule} from "./frontend-angular.routing.module"

@NgModule({
  declarations: [
    FrontendAngularComponent
  ],
  imports: [
    CommonModule,
    FrontendAngularRoutingModule
  ],
})
export class FrontendAngularModule { }
