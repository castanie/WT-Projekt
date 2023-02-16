import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Seat } from "../models/seat.model";
import { Ticket } from "../models/ticket.model";
import { AuthService } from "./auth.service";

const SCREEN_API = "http://localhost:4200/api/screens";
const TICKET_API = "http://localhost:4200/api/tickets";
const HTTP_OPTIONS = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    withCredentials: true,
};

@Injectable({
    providedIn: "root",
})
export class SeatService {
    constructor(private http: HttpClient, private authService: AuthService) {}

    public getSeats(screen: number): Observable<Seat[]> {
        return this.http
            .get<Seat[]>(`${SCREEN_API}/${screen}/seats`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Seat[]>([])));
    }

    public getSeat(screen: number, seat: string): Observable<Seat> {
        return this.http
            .get<Seat>(`${SCREEN_API}/${screen}/seats/${seat}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Seat>()));
    }

    //--------//

    public getTickets(): Observable<Ticket[]> {
        return this.http
            .get<Ticket[]>(
                `${TICKET_API}?user=${this.authService.username}`,
                HTTP_OPTIONS
            )
            .pipe(catchError(this.handleError<Ticket[]>([])));
    }

    public getTicket(ticket: string): Observable<Ticket> {
        return this.http
            .get<Ticket>(`${TICKET_API}/${ticket}`, HTTP_OPTIONS)
            .pipe(catchError(this.handleError<Ticket>()));
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
