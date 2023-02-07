import { Component, OnInit } from "@angular/core";
import { Film } from "src/app/film.model";
import { FilmService } from "src/app/film.service";

@Component({
    selector: "app-film-list",
    templateUrl: "./film-list.component.html",
    styleUrls: ["./film-list.component.scss"],
})
export class FilmListComponent implements OnInit {
    protected films: Film[] = [];

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
