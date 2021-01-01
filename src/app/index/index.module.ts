import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { IndexComponent } from "./index.component";
import { IndexRoutingModule } from "./index.routes";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { ListArticlesComponent } from "../list-articles/list-articles.component";

@NgModule({
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        IndexRoutingModule,
        NativeScriptUIListViewModule
    ],
    exports: [],
    declarations: [IndexComponent, ListArticlesComponent],
    providers: [],
})

export class IndexModule {}