import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url="http://localhost:4201/users"
  

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.url)
  }

  getUser(id:number){
    return this.http.get<User>(`${this.url}/${id}`)
  }
}
