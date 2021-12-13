import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://uverseapp.herokuapp.com/usuarios/logar', userLogin)
  }

  signin(user: User): Observable<User> {
    return this.http.post<User>('https://uverseapp.herokuapp.com/usuarios/cadastrar', user)
  }
}
