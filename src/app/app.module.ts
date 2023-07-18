import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { SignUpFormComponent } from './signup-form/signup-form.component';
import { NewFormArrayComponent } from './new-form-array/new-form-array.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    BootstrapPanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    NewCourseFormComponent,
    SignUpFormComponent,
    NewFormArrayComponent,
    ChangePasswordFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
