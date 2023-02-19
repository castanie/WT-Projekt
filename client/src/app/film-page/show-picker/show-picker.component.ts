import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Seat } from "src/app/models/seat.model";
import { Show } from "src/app/models/show.model";
import { FilmService } from "src/app/services/film.service";
import { SeatService } from "src/app/services/seat.service";

@Component({
    selector: "app-show-picker",
    templateUrl: "./show-picker.component.html",
    styleUrls: ["./show-picker.component.scss"],
})
export class ShowPickerComponent implements OnInit {
    protected film!: string;
    protected show!: number;
    protected shows!: Show[];
    protected order!: string[];
    protected seats!: Seat[];

    protected date!: string;
    protected dates = [0, 1, 2, 3, 4, 5, 6, 7];

    constructor(
        private route: ActivatedRoute,
        private filmService: FilmService,
        private seatService: SeatService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.film = params["id"];
        });
        this.date = new Date().toISOString().slice(0, 10);
    }

    getShows(): void {
        this.filmService
            .getShows(this.film, this.date)
            .subscribe((shows: Show[]) => (this.shows = shows));
    }

    onDate(event: Event): void {
        let className = (event.target as HTMLElement).className;
        if (className == "deselected clickable") {
            (event.target as HTMLElement).className = "selected clickable";
        } else {
            (event.target as HTMLElement).className = "deselected clickable";
        }
        this.date = (event.target as HTMLElement).id;
        this.getShows();
        console.log(this.date);
    }

    onShow(event: Event): void {
        let className = (event.target as HTMLElement).className;
        if (className == "deselected clickable") {
            (event.target as HTMLElement).className = "selected clickable";
        } else {
            (event.target as HTMLElement).className = "deselected clickable";
        }
        this.show = +(event.target as HTMLElement).id;
        this.seatService.getSeats(this.show).subscribe((seats: Seat[]) => {
            // let prefix = seats[0].id.slice(0, 1);
            // let count = 0;
            // while (seats[count].id.startsWith(prefix)) {
            //     ++count;
            this.seats = seats;
            console.log(seats);
        });
        console.log(this.date);
    }

    onSeat(event: Event): void {
        // let className = (event.target as HTMLElement).className;
        let seat = (event.target as HTMLElement).id;
        if (this.order.includes(seat)) {
            this.order.splice(this.order.indexOf(seat), 1);
            (event.target as HTMLElement).className =
                "seat deselected clickable";
        } else {
            this.order.push(seat);
            (event.target as HTMLElement).className = "seat selected clickable";
        }
    }

    getISODate(offset: number): string {
        let date = new Date();
        date.setDate(date.getDate() + offset);

        return date.toISOString().slice(0, 10);
    }

    getDate(offset: number): string {
        let date = new Date();
        date.setDate(date.getDate() + offset);
        let names = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

        let name = names[date.getDay()];
        let day = (date.getDate() + 0).toString().padStart(2, "0");
        let month = (date.getMonth() + 1).toString().padStart(2, "0");

        // return `${name}\n${month}/${day}`;
        return `${name}`;
    }
}
