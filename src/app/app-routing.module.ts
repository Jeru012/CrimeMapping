import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "login",
    loadChildren: ()=> import('./login/login.module')
    .then(mod=>mod.LoginModule),
  },
  {
  path: "dashboard",
  loadChildren: ()=> import('./dashboard/dashboard.module')
  .then(mod=>mod.DashboardModule),
},
{
  path: "map",
  loadChildren: ()=> import('./map/map.module')
  .then(mod=>mod.MapModule),
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
