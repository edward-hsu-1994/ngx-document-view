import { Component, OnInit, Input } from '@angular/core';
import { ViewProviders } from '../models/ViewProviders';

@Component({
  selector: 'ngx-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {
  /**
   * 檢視器提供者
   */
  @Input() public provider: ViewProviders = ViewProviders.Google;

  /**
   * 文件來源
   */
  @Input() public src: string;

  /**
   * 是否有外框
   */
  @Input() public frameBorder = 0;

  constructor() {}

  ngOnInit() {}

  encodeURI(url: string): string {
    return encodeURIComponent(url);
  }
}
