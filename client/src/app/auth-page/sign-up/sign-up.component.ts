import { Component } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-sign-up",
    templateUrl: "./sign-up.component.html",
    styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent {
    protected username = "";
    protected password_1 = "";
    protected password_2 = "";
    protected message = "";

    constructor(private router: Router, private authService: AuthService) {}

    onClick(): void {
        console.log(
            `${this.username} : ${this.password_1} : ${this.password_2}`
        );
        if (this.password_1 == this.password_2) {
            this.authService
                .postSignIn(this.username, this.password_1)
                .subscribe({
                    next: (value) => {
                        this.authService.isSignedIn = true;
                        this.router.navigate(["/"]);
                    },
                    error: (error) => {
                        this.message = error.error.message;
                    },
                });
        } else {
            this.message = "Passwords did not match.";
        }
    }
}
