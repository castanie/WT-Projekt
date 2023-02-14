import { Component, OnInit } from "@angular/core";
import { Film } from "src/app/models/film.model";
import { FilmService } from "src/app/film.service";

@Component({
    selector: "app-film-grid",
    templateUrl: "./film-grid.component.html",
    styleUrls: ["./film-grid.component.scss"],
})
export class FilmGridComponent implements OnInit {
    private sub: any;
    protected films!: Film[];

    constructor(private filmService: FilmService) {}

    ngOnInit(): void {
        this.getFilms();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getFilms(): void {
        this.sub = this.filmService
            .getFilms()
            .subscribe((films: Film[]) => (this.films = films));
    }
}
