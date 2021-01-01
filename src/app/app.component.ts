import { Component, AfterViewInit, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { DrawerStateChangedEventArgs, RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { MenuService } from "./menu.service";
import * as Admob from "nativescript-admob";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements AfterViewInit ,OnInit {
    
	@ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;
    date = new Date();
    gestures: boolean = false;
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
        this.menuService.OptionTaped.subscribe(Response => this.onCloseDrawerTap());
    }

	
    public openDrawer() {
        this.drawer.showDrawer();
    }

    public onCloseDrawerTap() {
        this.drawer.closeDrawer();
    }

    public onDrawerClosed(args: DrawerStateChangedEventArgs) {
        this.gestures = false;
    }

    public onDrawerOpened(args: DrawerStateChangedEventArgs) {
        this.gestures = true;
    }
}
