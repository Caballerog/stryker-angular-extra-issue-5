import { SharedModule } from "app/shared/shared.module";
import { CoreModule } from "app/shared/core.module";
import { AppComponent } from "app/app.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "app/app-routing.module";
import { HeaderComponent } from "app/shared/components/header/header.component";
import { FooterComponent } from "app/shared/components/footer/footer.component";
import { LoginComponent } from "app/shared/components/header/login/login.component";
import { Error404Component } from 'app/shared/components/error404/error404.component';



@NgModule({
  declarations: [
      HeaderComponent,
      LoginComponent,
      FooterComponent,
      AppComponent,
      Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
