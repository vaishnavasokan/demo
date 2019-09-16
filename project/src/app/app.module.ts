import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { JobvacancyComponent } from './jobvacancy/jobvacancy.component';
import {RegisterService} from './register.service'

const approutes:Routes=[
  {path:"", component:HomeComponent},
  {path:"register",component:SignupComponent},
  {path:"postjob",component:JobvacancyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    HomeComponent,
    JobvacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)

  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
