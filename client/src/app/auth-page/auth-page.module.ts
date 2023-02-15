import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "../app-routing.module";
import { AuthPageComponent } from "./auth-page.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
    declarations: [AuthPageComponent, SignInComponent, SignUpComponent],
    imports: [AppRoutingModule, CommonModule, FormsModule],
})
export class AuthPageModule {}
