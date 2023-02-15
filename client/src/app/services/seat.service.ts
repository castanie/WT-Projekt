import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Seat } from "./seat.model";

const SEAT_API = "http://localhost:4200/api/seats";
const HTTP_OPTIONS = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
    providedIn: "root",
})
export class SeatService {
    constructor(private http: HttpClient) {}

    public getSeats(): Observable<Seat[]> {
        return this.http
            .get<Seat[]>(`${SEAT_API}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Seat[]>([])));
    }

    public getSeat(id: number): Observable<Seat> {
        return this.http
            .get<Seat>(`${SEAT_API}/${id}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Seat>()));
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
