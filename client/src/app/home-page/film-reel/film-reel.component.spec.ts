import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FilmReelComponent } from "./film-reel.component";

describe("FilmReelComponent", () => {
    let component: FilmReelComponent;
    let fixture: ComponentFixture<FilmReelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FilmReelComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(FilmReelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
