import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Film } from "../models/film.model";
import { AuthService } from "../services/auth.service";
import { FilmService } from "../services/film.service";

@Component({
    selector: "app-film-page",
    templateUrl: "./film-page.component.html",
    styleUrls: ["./film-page.component.scss"],
})
export class FilmPageComponent implements OnInit {
    protected film!: Film;
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
    }

    onClick(): void {
        console.log(`Posted review: <<${this.rating}>> - <<${this.review}>>`);
    }

    getFilm(): void {
        this.filmService
            .getFilm(this.film.id)
            .subscribe((film: Film) => (this.film = film));
    }
}
