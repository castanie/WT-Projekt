import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthPageModule } from "./auth-page/auth-page.module";
import { FilmPageModule } from "./film-page/film-page.module";
import { HomePageModule } from "./home-page/home-page.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        AppRoutingModule,
        AuthPageModule,
        BrowserModule,
        FilmPageModule,
        HomePageModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
