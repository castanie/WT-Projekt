import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";

const AUTH_API = "http://localhost:3000/api/auth/";
const HTTP_OPTIONS = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public testConnection(): void {
        this.http.get(AUTH_API).forEach((result) => console.log(result));
    }

    public postSignUp(username: string, password: string): Observable<any> {
        return this.http
            .post(
                AUTH_API + "signup",
                {
                    username,
                    password,
                },
                HTTP_OPTIONS
            )
            .pipe(catchError(this.handleError<any>([])));
    }

    public postSignIn(username: string, password: string): Observable<any> {
        return this.http
            .post(
                AUTH_API + "signin",
                {
                    username,
                    password,
                },
                HTTP_OPTIONS
            )
            .pipe(catchError(this.handleError<any>([])));
    }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            // Log to console:
            console.error(error);
            // Return empty result:
            return of(result as T);
        };
    }
}
