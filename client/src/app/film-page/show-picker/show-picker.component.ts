import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Show } from "src/app/show.model";
import { ShowService } from "src/app/show.service";

@Component({
    selector: "app-show-picker",
    templateUrl: "./show-picker.component.html",
    styleUrls: ["./show-picker.component.scss"],
})
export class ShowPickerComponent implements OnInit, OnDestroy {
    private sub: any;
    protected film!: string;
    protected show!: Show;
    protected shows!: Show[];

    protected date!: string;
    protected dates = [0, 1, 2, 3, 4, 5, 6, 7];

    constructor(
        private route: ActivatedRoute,
        private showService: ShowService
    ) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {
            this.film = params["id"];
        });
        this.getShows();
        this.show = { id: 1 };
        this.date = new Date().toISOString().slice(0, 10);
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getShows(): void {
        this.sub = this.showService
            .getShows(this.film, this.date)
            .subscribe((shows: Show[]) => (this.shows = shows));
    }

    onDate(event: Event): void {
        this.date = (event.target as HTMLElement).id;
        this.getShows();
        console.log(this.date);
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

        return `${name}, ${month}/${day}`;
    }
}
