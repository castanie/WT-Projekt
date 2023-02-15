import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Show } from "./show.model";

const SHOW_API = "http://localhost:4200/api/shows";
const HTTP_OPTIONS = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
    providedIn: "root",
})
export class ShowService {
    constructor(private http: HttpClient) {}

    public getShows(film: string, date: string): Observable<Show[]> {
        return this.http
            .get<Show[]>(`${SHOW_API}?film=${film}&date=${date}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Show[]>([])));
    }

    public getShow(id: number): Observable<Show> {
        return this.http
            .get<Show>(`${SHOW_API}/${id}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Show>()));
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
