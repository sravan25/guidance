import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-route.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormListComponent } from './form-list/form-list.component';
import { OutputCaptureComponent } from './output-capture/output-capture.component';
import { ApplyColorDirective } from './apply-color.directive';
import { FormElementComponent } from './form-element/form-element.component';
import { CustomStructDirective } from './custom-struct.directive';
import { CommonService } from 'src/common.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouteTutComponent } from './route-tut/route-tut.component';
import { DoubtsComponent } from './doubts/doubts.component';
import { CommunicateService } from './communicate.service';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptorService} from './auth-interceptor.service'
import {CustomPipe} from './custom.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    FormListComponent,
    OutputCaptureComponent,
    ApplyColorDirective,
    FormElementComponent,
    CustomStructDirective,
    LoginComponent,
    RegisterComponent,
    RouteTutComponent,
    DoubtsComponent,
    ErrorComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CommonService,CommunicateService,AuthService,AuthGuardService,{provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
