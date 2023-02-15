import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Film } from "../models/film.model";
import { FilmService } from "../services/film.service";

@Component({
    selector: "app-film-page",
    templateUrl: "./film-page.component.html",
    styleUrls: ["./film-page.component.scss"],
})
export class FilmPageComponent implements OnInit {
    protected film!: Film;

    constructor(
        private route: ActivatedRoute,
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

    getFilm(): void {
        this.filmService
            .getFilm(this.film.id)
            .subscribe((film: Film) => (this.film = film));
    }
}
