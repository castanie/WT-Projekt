import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../app-routing.module";

import { FilmGridComponent } from "./film-grid/film-grid.component";
import { FilmReelComponent } from "./film-reel/film-reel.component";
import { HomePageComponent } from "./home-page.component";

@NgModule({
    declarations: [FilmGridComponent, FilmReelComponent, HomePageComponent],
    imports: [CommonModule, AppRoutingModule],
})
export class HomePageModule {}
