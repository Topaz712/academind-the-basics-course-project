import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
  // kind: string; //Max's video has it but the firebase web doesn't now
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
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
    ).pipe(catchError(errorRes => {
      let errorMessage = 'An unknown error occured!';
      if (!errorRes.error || !errorRes.error.error) {
      // return throwError(errorMessage); //Max's code but deprecated
        return throwError(() => new Error(errorMessage));
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'This email exists already';
      }
      // return throwError(errorMessage); //Max's code but deprecated
      return throwError(() => new Error(errorMessage));
    }));
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD5v85xSyBfcm4X35RIN3gik4uHO3_7Leo',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
