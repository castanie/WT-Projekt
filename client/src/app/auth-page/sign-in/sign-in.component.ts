import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-sign-in",
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.component.scss"],
})
export class SignInComponent {
    protected username = "";
    protected password = "";
    protected message = "";

    constructor(private router: Router, private authService: AuthService) {}

    onClick(): void {
        console.log(`${this.username} : ${this.password}`);
        this.authService.postSignIn(this.username, this.password).subscribe({
            next: (result) => {
                this.authService.username = this.username;
                this.authService.isSignedIn = true;
                this.router.navigate(["/"]);
            },
            error: (error) => {
                this.message = error.error.message;
            },
        });
    }
}
