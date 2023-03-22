import { NgModule } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { NotFountComponent } from './not-fount/not-fount.component';
import { OffresEmploisComponent } from './offres-emplois/offres-emplois.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponentComponent } from './products-component/products-component.component';


const routes: Routes = [ 
  {path : '' , redirectTo : 'home' , pathMatch : 'full' },
  {path : 'products/:id' , component : ProductDetailComponent},
  { path: 'products', component: ProductsComponentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'offres', component: OffresEmploisComponent },
{  path: 'Form', component: FormComponent },
{ path : '**' ,component :  NotFountComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
