import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AuthenticationRequest, AuthenticationResponse, RegisterRequest } from './auth.models';
import { Observable } from 'rxjs';
import { LocalService } from '../storage/local.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const AUTH_API = "http://localhost:8080/api/v1/auth/";
const USER_API = "http://localhost:8080/api/user/";
const AUTH_TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = {};
  constructor(
    private http: HttpClient,
    private localService: LocalService,
    public router: Router,
    ) {
     }

  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post<AuthenticationResponse>(AUTH_API + "register", registerRequest);
  }

  login(loginRequest: AuthenticationRequest) {
    return this.http.post<AuthenticationResponse>(AUTH_API + "login", loginRequest)
    .subscribe((response) => {
      this.localService.saveData(AUTH_TOKEN_KEY, response.accessToken);
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(response.accessToken);
      this.fetchUserRole().subscribe(
        (roleResponse: String) => {
          this.currentUser = {
            username: decodedToken.sub,
            role: roleResponse
          }
          this.router.navigate(["categories"]);
        }
      )
    });
  }

  getToken() {
    return this.localService.getData(AUTH_TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    const authToken = this.getToken();
    return authToken !== null ? true : false;
  }
  
  logout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }

  fetchUserRole() : Observable<any>{
    return this.http.get<any>(USER_API + "role");
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
