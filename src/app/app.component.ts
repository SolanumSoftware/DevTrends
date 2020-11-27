import { Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { MenuService } from "./menu.service";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit ,OnInit {

	@ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
	constructor(
        private _changeDetectionRef: ChangeDetectorRef,
        private menuService: MenuService
	) { }

	ngAfterViewInit(): void {
		this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
	}

	ngOnInit() {
        this.menuService.MenuEvent.subscribe(Response => Response ? this.openDrawer(): this.onCloseDrawerTap());
    }

	
    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }
}
