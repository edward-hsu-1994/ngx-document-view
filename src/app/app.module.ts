import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentViewModule } from './document-view/document-view.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DocumentViewModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
