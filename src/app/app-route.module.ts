import { NgModule} from '@angular/core';
import { MainComponent } from './main/main.component';
import { OutputCaptureComponent } from './output-capture/output-capture.component';
import {RouteTutComponent} from './route-tut/route-tut.component';
import {DoubtsComponent} from './doubts/doubts.component'
import {ErrorComponent} from './error/error.component'
import {AuthGuardService} from './auth-guard.service'
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import  {RegisterComponent} from './register/register.component';

const appRoutes: Routes = [
    {path: '', component: MainComponent},
    {
        path: 'items/:name', component: OutputCaptureComponent,
        // children:[{path:":id",component:"childComponent"}]
    },
    {path: 'routes', component: RouteTutComponent},
    {path: 'doubts', component: DoubtsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'error', component: ErrorComponent, data: {message: 'Page Not Found'}},
    {path: '**', redirectTo: '/error'}
];
  @NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
  })
  export class AppRoutingModule {

  }
