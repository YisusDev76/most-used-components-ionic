import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly API_URL = 'https://randomuser.me/api?results=10';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.API_URL);
  }
}
