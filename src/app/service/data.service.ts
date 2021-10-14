import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  httpClient: any;

  constructor( private http:HttpClient) { }

  registerUser(data:any) {
     return this.http.post(environment.apiUrl+'/api/register/', data);
  }
  login(data:any){
    return this.http.post(environment.apiUrl+'/api/login/', data);
  }

  // getData() 
  // {
  //   return this.httpClient.get('http://127.0.0.1:8000/api/livresProposés');
  // }

  insertData(data:any) 
   {
    return this.http.post('http://127.0.0.1:8000/api/addLivresProposés', data);
  }

  deleteData(id:any) 
  {
   return this.http.delete('http://127.0.0.1:8000/api/deleteLivresProposés/' +id);
 }
}

