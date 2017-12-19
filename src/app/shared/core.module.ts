import { HttpService } from "app/shared/services/http.service";
import { XHRBackend, RequestOptions, HttpModule } from "@angular/http";
import { Router } from "@angular/router";
import { NgModule } from "@angular/core";

import { RecaptchaModule } from "ng-recaptcha";
import { RecaptchaFormsModule } from "ng-recaptcha/recaptcha/recaptcha-forms.module";


/* export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
} */

export function HttpServiceFactory(backend: XHRBackend, options: RequestOptions, /* storage: AsyncLocalStorage, */ router: Router) {
    return new HttpService(backend, options, /* storage, */ router);
}

export const CORE_SERVICES = [
    {
        provide: HttpService,
        useFactory: HttpServiceFactory,
        deps: [XHRBackend, RequestOptions, Router],
    },
];

@NgModule({
    imports: [
        HttpModule,
    ],
    providers: CORE_SERVICES,
})
export class CoreModule {}
