import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Error404Component } from "app/shared/components/error404/error404.component";


export const routes: Routes = [
    {
        path: "",
        loadChildren: "app/home/home.module#HomeModule",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule { }
