import { Component, OnInit } from "@angular/core";
import { Film } from "src/app/models/film.model";
import { FilmService } from "src/app/services/film.service";

@Component({
    selector: "app-film-grid",
    templateUrl: "./film-grid.component.html",
    styleUrls: ["./film-grid.component.scss"],
})
export class FilmGridComponent implements OnInit {
    protected films!: Film[];

    constructor(private filmService: FilmService) {}

    ngOnInit(): void {
        this.getFilms();
    }

    getFilms(): void {
        this.filmService
            .getFilms()
            .subscribe((films: Film[]) => (this.films = films));
    }
}
