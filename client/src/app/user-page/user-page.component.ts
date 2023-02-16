import { Component, OnInit } from "@angular/core";
import { Ticket } from "../models/ticket.model";
import { AuthService } from "../services/auth.service";
import { FilmService } from "../services/film.service";
import { SeatService } from "../services/seat.service";

@Component({
    selector: "app-user-page",
    templateUrl: "./user-page.component.html",
    styleUrls: ["./user-page.component.scss"],
})
export class UserPageComponent implements OnInit {
    protected tickets!: Ticket[];

    constructor(
        protected authService: AuthService,
        private seatService: SeatService
    ) {}

    ngOnInit() {
        this.getTickets();
    }

    getTickets(): void {
        this.seatService
            .getTickets()
            .subscribe((tickets: Ticket[]) => (this.tickets = tickets));
    }
}
