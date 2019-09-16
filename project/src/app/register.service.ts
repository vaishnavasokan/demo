import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private hc:HttpClient) { }

public adduser(a,b,c,d,e,f)
  {
    let url="http://localhost:8080/users/adduser";
    return this.hc.post(url,{uname:a,email:b,mobno:c,
      pswd:d,location:e,resume:f});
  }

}
