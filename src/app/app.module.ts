import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes,RouterModule} from '@angular/router';

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

const appRoutes:Routes = [{
  path:"items",component:OutputCaptureComponent
},
{path:"",component:MainComponent}]
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
    CustomStructDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
