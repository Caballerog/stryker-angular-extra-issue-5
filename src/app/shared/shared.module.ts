import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";


const SHARED_MODULES = [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
/*     BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule */
];
@NgModule({
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES]
})
export class SharedModule { }


