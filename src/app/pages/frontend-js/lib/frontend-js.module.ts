import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendJsComponent } from '../model/frontend-js.component';
import {FrontendJsRoutingModule} from "./frontend-js-routing.module";
import {FrontendJsHttpService} from "./frontend-js.http.service";

@NgModule({
  declarations: [
    FrontendJsComponent
  ],
  imports: [
    CommonModule,
    FrontendJsRoutingModule,
  ],
  providers: [FrontendJsHttpService]
})
export class FrontendJsModule { }
