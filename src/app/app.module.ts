import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelViewSecondComponent } from './model-view-second/model-view-second.component';
import { ModelViewThirdComponent } from './model-view-third/model-view-third.component';
import { ModalViewForthComponent } from './modal-view-forth/modal-view-forth.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ModalViewComponent,
    ModelViewSecondComponent,
    ModelViewThirdComponent,
    ModalViewForthComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
