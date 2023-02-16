import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Film } from "../models/film.model";
import { Review } from "../models/review.model";
import { Show } from "../models/show.model";
import { AuthService } from "../services/auth.service";
import { FilmService } from "../services/film.service";

@Component({
    selector: "app-film-page",
    templateUrl: "./film-page.component.html",
    styleUrls: ["./film-page.component.scss"],
})
export class FilmPageComponent implements OnInit {
    protected film!: Film;
    protected reviews!: Review[];
    protected shows!: Show[];

    protected rating!: number;
    protected review!: string;

    constructor(
        private route: ActivatedRoute,
        protected authService: AuthService,
        private filmService: FilmService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.film = {
                id: params["id"],
            };
        });
        this.getFilm();
        this.getReviews();
    }

    onReview(): void {
        this.filmService
            .postReview(this.film.id, this.rating, this.review)
            .subscribe((params) => {
                console.log(params);
            });
    }

    getFilm(): void {
        this.filmService
            .getFilm(this.film.id)
            .subscribe((film: Film) => (this.film = film));
    }

    getReviews(): void {
        this.filmService
            .getReviews(this.film.id)
            .subscribe((reviews: Review[]) => (this.reviews = reviews));
    }
}
