import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "../app-routing.module";
import { FilmPageComponent } from "./film-page.component";
import { SeatPickerComponent } from "./seat-picker/seat-picker.component";
import { ShowPickerComponent } from "./show-picker/show-picker.component";

@NgModule({
    declarations: [FilmPageComponent, ShowPickerComponent, SeatPickerComponent],
    imports: [CommonModule, AppRoutingModule],
})
export class FilmPageModule {}
