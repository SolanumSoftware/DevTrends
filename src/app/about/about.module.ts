import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { AboutComponent } from "./about.component";
import { AboutRoutingModule } from "./about.routes";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        AboutRoutingModule,
        NativeScriptUIListViewModule
    ],
    exports: [],
    declarations: [AboutComponent],
    providers: [],
})

export class AboutModule {}