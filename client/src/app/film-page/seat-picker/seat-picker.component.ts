import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Seat } from "src/app/seat.model";
import { SeatService } from "src/app/seat.service";

@Component({
    selector: "app-seat-picker",
    templateUrl: "./seat-picker.component.html",
    styleUrls: ["./seat-picker.component.scss"],
})
export class SeatPickerComponent implements OnInit, OnDestroy {
    private sub: any;
    protected seats!: Seat[];

    constructor(
        private route: ActivatedRoute,
        private seatService: SeatService
    ) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {
            this.seats = params["id"];
        });
        this.getSeats();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getSeats(): void {
        this.sub = this.seatService
            .getSeats()
            .subscribe((seats: Seat[]) => (this.seats = seats));
    }
}
