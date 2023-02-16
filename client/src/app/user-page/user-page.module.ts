import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPageComponent } from "./user-page.component";
import { QRCodeModule } from "angularx-qrcode";

@NgModule({
    declarations: [UserPageComponent],
    imports: [CommonModule, QRCodeModule],
})
export class UserPageModule {}
