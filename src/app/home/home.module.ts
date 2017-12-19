import { NgModule } from "@angular/core";
import { HomeComponent } from "app/home/home.component";
import { HomeRoutingModule } from "app/home/home.routing.module";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule { }
