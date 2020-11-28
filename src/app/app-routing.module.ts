import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { IndexComponent } from "./index/index.component";
import { ListarMarkdownComponent } from "./listar-markdown/listar-markdown.component";

const routes: Routes = [
    { path: "", redirectTo: "listar", pathMatch: "full" },
    { path: "index", component: IndexComponent },
    { path: "listar", component: ListarMarkdownComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
