import { BootstrapOptions, Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private Auth:AuthService)
  {

  }
  Email:string="";
  Password:string="";
  Login:boolean=false;
  errormsg:string="";
  Loading:boolean=false;
  btnEnable:boolean=false;
  Result!:boolean;
  OnSumbint(){
  this.Loading=true;
  this.btnEnable=true;
   this.Auth.CheckLoginAccess(this.Email,this.Password)

  }
}
