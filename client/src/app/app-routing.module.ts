import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthPageComponent } from "./auth-page/auth-page.component";
import { SignInComponent } from "./auth-page/sign-in/sign-in.component";
import { SignUpComponent } from "./auth-page/sign-up/sign-up.component";
import { FilmPageComponent } from "./film-page/film-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { UserPageComponent } from "./user-page/user-page.component";

const routes: Routes = [
    { path: "", redirectTo: "films", pathMatch: "full" },
    { path: "films", component: HomePageComponent },
    { path: "films/:id", component: FilmPageComponent },
    {
        path: "auth",
        component: AuthPageComponent,
        children: [
            { path: "sign-up", component: SignUpComponent },
            { path: "sign-in", component: SignInComponent },
        ],
    },
    { path: "dashboard", component: UserPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: "enabled" })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
