import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
    { path: "", redirectTo: "index", pathMatch: "full" },
    { path: "index", component: IndexComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
