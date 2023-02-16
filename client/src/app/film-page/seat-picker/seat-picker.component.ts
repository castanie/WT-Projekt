import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Seat } from "src/app/models/seat.model";
import { SeatService } from "src/app/services/seat.service";

@Component({
    selector: "app-seat-picker",
    templateUrl: "./seat-picker.component.html",
    styleUrls: ["./seat-picker.component.scss"],
})
export class SeatPickerComponent implements OnInit {
    protected seats!: Seat[];

    constructor(
        private route: ActivatedRoute,
        private seatService: SeatService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.seats = params["id"];
        });
        // this.getSeats();
    }

    // getSeats(): void {
    //     this.seatService
    //         .getSeats()
    //         .subscribe((seats: Seat[]) => (this.seats = seats));
    // }
}
