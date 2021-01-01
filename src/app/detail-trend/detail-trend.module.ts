import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { DetailTrendComponent } from "./detail-trend.component";
import { DetailTrendRoutingModule } from "./detail-trend.routes";

@NgModule({
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        DetailTrendRoutingModule
    ],
    exports: [],
    declarations: [DetailTrendComponent],
    providers: [],
})

export class DetailTrendModule {}