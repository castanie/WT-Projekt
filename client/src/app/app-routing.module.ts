import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmPageComponent } from "./film-page/film-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
    { path: "", redirectTo: "films", pathMatch: "full" },
    { path: "films", component: HomePageComponent },
    { path: "films/:id", component: FilmPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
