import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: "",
        children: [
            {

                path: "",
                pathMatch: "full",
                loadChildren: "app/home/front/front.module#FrontModule",
            },
            {
                path: "register",
                loadChildren: "app/home/register/register.module#RegisterModule",
            },
            {
                path: "password",
                loadChildren: "app/home/password/password.module#PasswordModule",
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class HomeRoutingModule { }
