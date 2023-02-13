import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Film } from "../film.model";
import { FilmService } from "../film.service";

@Component({
    selector: "app-film-page",
    templateUrl: "./film-page.component.html",
    styleUrls: ["./film-page.component.scss"],
})
export class FilmPageComponent implements OnInit, OnDestroy {
    private sub: any;
    protected film!: Film;

    constructor(
        private route: ActivatedRoute,
        private filmService: FilmService
    ) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params) => {
            this.film = {
                id: params["id"],
            };
        });
        this.getFilm();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getFilm(): void {
        this.filmService
            .getFilm(this.film.id)
            .subscribe((film: Film) => (this.film = film));
    }
}
