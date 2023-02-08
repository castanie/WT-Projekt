import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilmGridComponent } from "./film-grid/film-grid.component";
import { FilmReelComponent } from "./film-reel/film-reel.component";
import { HomePageComponent } from "./home-page.component";

@NgModule({
    declarations: [FilmGridComponent, FilmReelComponent, HomePageComponent],
    imports: [CommonModule],
})
export class HomePageModule {}
