import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { AuthService } from './_services/auth.service';
import {enableProdMode} from '@angular/core';

enableProdMode();

const routes:Routes=[{
  path:'',component:HomeComponent
},{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'dashBoard',component:DashBoardComponent}];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(routes),
    FormsModule,HttpClientModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
