import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";

const FIREBASE_WEB_API_KEY = environment.firebaseApiKey;
const FIREBASE_SIGN_UP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_SIGN_UP_URL}';
const FIREBASE_SIGN_IN_URL = '';

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
      FIREBASE_SIGN_UP_URL,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    );
  }
}
