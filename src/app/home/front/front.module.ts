import { NewsService } from "app/home/front/news/news.service";
import { NewsComponent } from "app/home/front/news/news.component";
import { FrontComponent } from "app/home/front/front.component";
import { RecaptchaFormsModule } from "ng-recaptcha/recaptcha/recaptcha-forms.module";
import { RecaptchaModule } from "ng-recaptcha";
import { SharedModule } from "app/shared/shared.module";
import { NgModule } from "@angular/core";
import { FrontRoutingModule } from "app/home/front/front-routing.module";
 
const FRONT_SERVICES = [NewsService];
@NgModule({
  declarations: [
    NewsComponent,
    FrontComponent,
  ],
  imports: [
    RecaptchaFormsModule,
    RecaptchaModule.forRoot(),
    FrontRoutingModule,
    SharedModule,
  ],
  providers: FRONT_SERVICES,
})
export class FrontModule { }
