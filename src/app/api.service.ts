import { Injectable } from '@angular/core';
import {
  HttpClient
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get("http://localhost:3000/jobs");
  }

  getDataById(id:any) {
    return this.http.get("http://localhost:3000/jobs?id="+id)
  }

  postData(data:any){
    return this.http.post("http://localhost:3000/jobs",data);
}
}
