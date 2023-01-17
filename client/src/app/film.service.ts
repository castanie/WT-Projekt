import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Film } from "./film.model";

@Injectable({
    providedIn: "root",
})
export class FilmService {
    constructor(private http: HttpClient) {}

    getFilms(): Observable<Film[]> {
        return this.http
            .get<Film[]>("url")
            .pipe(catchError(this.handleError<Film[]>([])));
    }

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            // ...:
            console.error(error);
            // Let the app keep running by returning an empty result:
            return of(result as T);
        };
    }
}
