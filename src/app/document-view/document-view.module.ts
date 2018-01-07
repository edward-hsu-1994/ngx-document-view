import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentViewDirective } from './document-view.directive';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  imports: [CommonModule, SafePipeModule],
  declarations: [DocumentViewDirective],
  exports: [DocumentViewDirective]
})
export class DocumentViewModule {}
