import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router:Router,private http:HttpClient) 
  {
    this.Canaccess();
  }
  ISathendicate():boolean{
    if(sessionStorage.getItem('Token')!=null && sessionStorage.getItem('Token')!="")
    {
       return true;
    }
    return false;
  }

  Canaccess(){
    if(this.ISathendicate()!=true)
    {
     this.router.navigate(['/login']);  
    }
  }




  ngonInit():void{
   }

   CheckLoginAccess(Email:string,Passworda:string)
   {
    let id=1;
    let Url="https://localhost:7030/WeatherForecast/Posted/1";
  console.log(Url);
  return  this.http.post<{idTokena:string}>(Url,"");
   }


  GetThaAllData(Login:Array<string>)
  {
     interface logins{  
      RegisterID:string;  
      UserName:string;  
      Email:string;  
      password:string;  
    
  }  
    employees: Observable<logins[]>;
    const ROOT_URL = 'https://localhost:44319/api/User';
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var bodys = {  
      UserName:Login[0],Email:Login[1],password:Login[2]
               }  
    
  return this.http.post<logins>(ROOT_URL+'/CreateUser',bodys,{headers}) 









  //   const url = 'https://localhost:44319/api/User/CreateUser';
  //   const body ={
  //     UserName:Login[0],Email:Login[1],password:Login[2]
  //   }
  // let   httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  //   };
  //   //do not need to stringify your body

  //   return this.http.post(url,body,httpOptions);
    //  sessionStorage.setItem('Token',name);
  //  return  this.http.post<{idToken:string}>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCJ7-bPXxZzKbStyvlK6xD2YKTXQXnqAqM",
  //  {name,email:Email,password:Password})
  //   let id=1;
  //   let Url="https://localhost:7030/WeatherForecast/Posted/";
  // console.log(Url);
  // return  this.http.post(Url,{UserName:user[0],Email:user[1],password:user[2]},{responseType :"text"});
  }
  StoreToken(Token:string){
   sessionStorage.setItem('Token',Token);
  }
}
