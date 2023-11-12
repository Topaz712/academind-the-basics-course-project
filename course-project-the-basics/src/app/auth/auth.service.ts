import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface AuthResponseData {
  // kind: string; //Max's video has it but the firebase web doesn't now
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD5v85xSyBfcm4X35RIN3gik4uHO3_7Leo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
