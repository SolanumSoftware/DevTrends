import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { DetailTrendComponent } from "./detail-trend.component";

const routes: Routes = [
   { path: "", component: DetailTrendComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DetailTrendRoutingModule { }