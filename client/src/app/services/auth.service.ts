import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

const AUTH_API = "http://localhost:4200/api/auth";
const USERS_API = "http://localhost:4200/api/users";
const HTTP_OPTIONS = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    observe: "response" as const,
    withCredentials: true,
};

@Injectable({
    providedIn: "root",
})
export class AuthService {
    public isSignedIn = false;

    constructor(private http: HttpClient) {}

    public postAuth(): void {
        this.http.post(`${AUTH_API}`, {}, HTTP_OPTIONS).subscribe({
            next: (value) => (this.isSignedIn = true),
            error: (error) => (this.isSignedIn = false),
        });
        // .pipe(catchError(this.handleError<any>([])));
    }

    public postSignUp(username: string, password: string): Observable<any> {
        return this.http.post(
            `${USERS_API}/sign-up`,
            {
                username,
                password,
            },
            HTTP_OPTIONS
        );
        // .pipe(catchError(this.handleError<any>([])));
    }

    public postSignIn(username: string, password: string): Observable<any> {
        return this.http.post(
            `${USERS_API}/sign-in`,
            {
                username,
                password,
            },
            HTTP_OPTIONS
        );
        // .pipe(catchError(this.handleError<any>([])));
    }

    // private handleError<T>(result?: T) {
    //     return (error: any): Observable<any> => {
    //         // Log to console:
    //         console.error(error);
    //         // Return error:
    //         return of(error);
    //     };
    // }
}
