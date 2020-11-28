import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { IndexComponent } from "./index.component";
import { IndexRoutingModule } from "./index.routes";

@NgModule({
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        IndexRoutingModule
    ],
    exports: [],
    declarations: [IndexComponent],
    providers: [],
})

export class IndexModule {}