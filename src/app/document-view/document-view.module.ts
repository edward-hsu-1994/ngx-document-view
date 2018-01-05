import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewComponent } from './document-view/document-view.component';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  imports: [CommonModule, SafePipeModule],
  declarations: [DocumentViewComponent],
  exports: [DocumentViewComponent]
})
export class DocumentViewModule {}
