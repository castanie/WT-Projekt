import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ShowPickerComponent } from "./show-picker.component";

describe("ShowPickerComponent", () => {
    let component: ShowPickerComponent;
    let fixture: ComponentFixture<ShowPickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ShowPickerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ShowPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
