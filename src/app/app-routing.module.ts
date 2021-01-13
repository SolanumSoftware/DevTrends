import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
    { path: "", redirectTo: "index", pathMatch: "full" },
    { path: "index", loadChildren: () => import("./index/index.module").then(m => m.IndexModule) },
    { path: "detail/:url", loadChildren: () => import("./detail-trend/detail-trend.module").then(m => m.DetailTrendModule )},
    { path: "about", loadChildren: () => import("./about/about.module").then(m => m.AboutModule )}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
