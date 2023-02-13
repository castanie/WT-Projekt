import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "../app-routing.module";
import { FilmPageComponent } from "./film-page.component";

@NgModule({
    declarations: [FilmPageComponent],
    imports: [CommonModule, AppRoutingModule],
})
export class FilmPageModule {}
