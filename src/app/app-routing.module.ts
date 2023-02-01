import { NgModule } from '@angular/core';
import { SecondComponent } from './second/second.component'; 
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

/*
const routes: Routes = [ { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },];
*/
@NgModule({
  imports: [/*RouterModule.forRoot(routes)*/],
  exports: [RouterModule]
})
export class AppRoutingModule { }
