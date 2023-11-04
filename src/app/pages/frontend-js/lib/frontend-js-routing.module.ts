import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import {FrontendJsComponent} from "../model/frontend-js.component";
import {SelectPlaceComponent} from "../../../places/select-place/select-place.component";
import {SandboxPlaceComponent} from "../../../places/sandbox-place/sandbox-place.component";
import {TestingPlaceComponent} from "../../../places/testing-place/testing-place.component";


const routes: Routes = [
  {
    path: '',
    component: FrontendJsComponent,
    children: [
      {path: '', redirectTo: 'select-place', pathMatch: 'full'},
      {
        path: 'select-place',
        component: SelectPlaceComponent
      },

      {
        path: 'junior/sandbox-place',
        component: SandboxPlaceComponent
      },
      {
        path: 'middle/sandbox-place',
        component: SandboxPlaceComponent
      },
      {
        path: 'junior/testing-place',
        component: TestingPlaceComponent
      },
      {
        path: 'middle/testing-place',
        component: TestingPlaceComponent
      },
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendJsRoutingModule { }
