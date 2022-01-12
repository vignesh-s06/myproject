import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { DevelopmentComponent } from './development/development.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
  path :'home',
  component : HomeComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'service',
    component:ServiceComponent,
    children:[
      {
        path:'dev',
        component:DevelopmentComponent
      },
      {
        path:'test',
        component:TestingComponent
      },
      {
        path:'deploy',
        component:DeploymentComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
