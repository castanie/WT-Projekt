import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilmListComponent } from "./film-list/film-list.component";
import { FilmReelComponent } from "./film-reel/film-reel.component";
import { HomePageComponent } from "./home-page.component";

@NgModule({
    declarations: [FilmListComponent, FilmReelComponent, HomePageComponent],
    imports: [CommonModule],
})
export class HomePageModule {}
