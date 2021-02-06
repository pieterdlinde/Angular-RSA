import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RSAHelper } from '../helpers/rsa.helper';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  baseHttpAddress: string = 'http://localhost:5000/';

  constructor(private http: HttpClient, private rsaHelper: RSAHelper) {}

  basicLogin(user: User): Observable<string> {
    return this.http.post<string>(
      this.baseHttpAddress + 'api/user/basic-login',
      user
    );
  }

  rsaLogin(user: User): Observable<string> {
    const encUser: User = {
      userName: this.rsaHelper.encryptWithPublicKey(user.userName),
      password: this.rsaHelper.encryptWithPublicKey(user.password),
    };

    return this.http.post<string>(
      this.baseHttpAddress + 'api/user/rsa-login',
      encUser
    );
  }

  rsaAdvancedLogin(user: User): Observable<string> {
    const encJsonUser = this.rsaHelper.encryptWithPublicKey(
      JSON.stringify(user)
    );

    return this.http.post<string>(
      this.baseHttpAddress + 'api/user/rsa-advanced-login',
      { data: encJsonUser }
    );
  }
}
