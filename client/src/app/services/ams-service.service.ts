import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmsServiceService {
 
  readonly ROOT_URL;
  
  

  constructor(private http : HttpClient) {
    this.ROOT_URL = "http://localhost:3000/ams";
   }
   get(uri:string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
    
  }
   post(uri:string ,payload:Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
    
  }

  saveUser(data:any){
    return this.http.post(this.ROOT_URL,data)
  }

  saveId(id :any){
    return this.http.post(this.ROOT_URL,id)
  }


  users(user:any){
    return this.http.post(this.ROOT_URL,user)
    }
  
 
}

