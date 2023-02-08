import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilmPageComponent } from "./film-page/film-page.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
    { path: "/", redirectTo: "/films/" },
    { path: "/films/", component: HomePageComponent },
    { path: "/films/:id/", component: FilmPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
