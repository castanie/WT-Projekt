import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Film } from "../models/film.model";

const FILM_API = "http://localhost:4200/api/films";
const HTTP_OPTIONS = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    withCredentials: true,
};

@Injectable({
    providedIn: "root",
})
export class FilmService {
    constructor(private http: HttpClient) {}

    public getFilms(): Observable<Film[]> {
        return this.http
            .get<Film[]>(`${FILM_API}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Film[]>([])));
    }

    public getFilm(id: string): Observable<Film> {
        return this.http
            .get<Film>(`${FILM_API}/${id}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Film>()));
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
