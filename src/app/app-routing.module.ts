import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { IndexComponent } from "./index/index.component";
import { ListarMarkdownComponent } from "./listar-markdown/listar-markdown.component";

const routes: Routes = [
    { path: "", redirectTo: "index", pathMatch: "full" },
    { path: "index", loadChildren: () => import("./index/index.module").then(m => m.IndexModule) },
    // :urlFile => the file extension it's a '.md' war file from github
    { path: "detail/:urlFile", loadChildren: () => import("./detail-trend/detail-trend.module").then(m => m.DetailTrendModule )}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
