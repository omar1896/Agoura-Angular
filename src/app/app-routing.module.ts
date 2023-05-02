import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HomeComponent } from './Components/home/home.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { LoginComponent } from './Components/Auth/login/login.component';
import { SignUpComponent } from './Components/Auth/sign-up/sign-up.component';
import { CreateProductFormComponent } from './Components/create-product-form/create-product-form.component';

const routes: Routes = [

  {path: "",redirectTo: '/home' , pathMatch: 'full' },
  {path: "",component:LayoutComponent,children:[
    {path:"place/create",component:CreateProductFormComponent},
    {path:"place/:id",component:ProductDetailsComponent},

  ]
},
  {path : "home",component:HomeComponent},
  {path : 'login' , component : LoginComponent},
  {path : 'signup' , component: SignUpComponent}
  // {path : "**",}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
