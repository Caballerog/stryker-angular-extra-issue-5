import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FrontComponent } from "app/home/front/front.component";


export const routes: Routes = [
    {
        path: "",
        component: FrontComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class FrontRoutingModule { }
