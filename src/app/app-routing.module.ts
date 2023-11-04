import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {SelectDevSpecificComponent} from "./places/select-dev-specific/select-dev-specific.component"

const routes: Routes = [
  {path: '', redirectTo: 'select-dev-specific', pathMatch: 'full'},
  {path: 'select-dev-specific', component: SelectDevSpecificComponent},
  {
    path: 'frontend-js',
    loadChildren: () => import('./pages/frontend-js').then(m => m.FrontendJsModule)
  },
  {
    path: 'frontend-react',
    loadChildren: () => import('./pages/frontend-react').then(m => m.FrontendReactModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
