import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewComponent } from './document-view/document-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DocumentViewComponent],
  exports: [DocumentViewComponent]
})
export class DocumentViewModule {}
