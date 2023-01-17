import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FilmListComponent } from "./film-list/film-list.component";
import { FilmReelComponent } from "./film-reel/film-reel.component";

@NgModule({
    declarations: [FilmListComponent, FilmReelComponent],
    imports: [CommonModule],
})
export class HomePageModule {}
