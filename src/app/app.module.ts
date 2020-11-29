import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptHttpClientModule } from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular"
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { IndexComponent } from "./index/index.component";
import { MenuComponent } from "./menu/menu.component";
import { ListarMarkdownComponent } from './listar-markdown/listar-markdown.component';
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        ListarMarkdownComponent
        MenuComponent,
        IndexComponent,
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
