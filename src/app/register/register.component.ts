import { Component } from '@angular/core';
import { Data, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private Auth:AuthService,public router:Router)
  {
   
  }
  onInit():void{
    
  }
  Submit=false;
  formName={name:"",email:"",password:""};
  Loadings:boolean=false;
  isDisabled:boolean=false;
  errormsg="";
  


  Onsubmint(){
    console.log(this.formName)
    this.Loadings=true;
    this.isDisabled=true;
    this.Auth.GetThaAllData([this.formName.name,this.formName.email,this.formName.password]).subscribe(
      {
        next:data=>{
          // this.Auth.StoreToken(data.idToken);
          console.log(data);
        },
        error:data=>{
          // if(data.error.error.errormsg!="INVALID_ERROR"){
          //   this.errormsg="INVALID MAIL";
          console.log(data);
          // }
          // if(data.error.error.errormsg!="MAIL_EXISTS"){
          //   this.errormsg="ALRADY EXSIST";
            
          // }
          // else{
          //   this.errormsg="UNKOWN ERROR";
            
          // }
        }
      }
    );
   
  }
}
