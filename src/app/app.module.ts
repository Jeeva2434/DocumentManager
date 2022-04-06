import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDocumentComponent } from './create-document/create-document.component';
import { UploadDocumentComponent } from './upload-document/upload-document.component';
import { ListOfDocumentComponent } from './list-of-document/list-of-document.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateDocumentComponent,
    UploadDocumentComponent,
    ListOfDocumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
