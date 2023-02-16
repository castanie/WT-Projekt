import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Film } from "../models/film.model";
import { Review } from "../models/review.model";
import { Show } from "../models/show.model";
import { AuthService } from "./auth.service";

const FILM_API = "http://localhost:4200/api/films";
const HTTP_OPTIONS = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    withCredentials: true,
};

@Injectable({
    providedIn: "root",
})
export class FilmService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    public getFilms(): Observable<Film[]> {
        return this.http
            .get<Film[]>(`${FILM_API}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Film[]>([])));
    }

    public getFilm(film: string): Observable<Film> {
        return this.http
            .get<Film>(`${FILM_API}/${film}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Film>()));
    }

    //--------//

    public getReviews(film: string) {
        return this.http
            .get<Review[]>(`${FILM_API}/${film}/reviews`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Review[]>()));
    }

    public getReview(film: string) {
        return this.http
            .get<Review>(
                `${FILM_API}/${film}/reviews?user=${this.authService.username}`,
                HTTP_OPTIONS
            )
            .pipe(catchError(this.handleError<Review>()));
    }

    public postReview(film: string, rating: number, review: string) {
        return this.http
            .post<Review>(
                `${FILM_API}/${film}/reviews`,
                {
                    username: this.authService.username,
                    rating: rating,
                    review: review,
                },
                HTTP_OPTIONS
            )
            .pipe(catchError(this.handleError<Review>()));
    }

    //--------//

    public getShows(film: string, date: string): Observable<Show[]> {
        return this.http
            .get<Show[]>(`${FILM_API}/${film}/shows?date=${date}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Show[]>([])));
    }

    public getShow(film: number, show: number): Observable<Show> {
        return this.http
            .get<Show>(`${FILM_API}/${film}/shows/${show}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Show>()));
    }

    public postShow(film: string, screen: number, date: string, time: string) {
        return this.http
            .post<Show>(
                `${FILM_API}/${film}/shows`,
                { film: film, screen: screen, date: date, time: time },
                HTTP_OPTIONS
            )
            .pipe(catchError(this.handleError<Show>()));
    }

    //--------//

    private handleError<T>(result?: T) {
        return (error: any): Observable<T> => {
            // ...:
            console.error(error);
            // Let the app keep running by returning an empty result:
            return of(result as T);
        };
    }
}
