import { Component, OnInit, Input } from '@angular/core';
import { ViewProviders } from '../models/ViewProviders';
import { UriBuilder } from 'uribuilder';
import { cleanPath } from 'cleanPath';
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

  /**
   * 轉換連結與編碼
   * @param url 連結
   */
  encodeURI(url: string): string {
    if (UriBuilder.parse(url).isRelative()) {
      url = cleanPath(document.baseURI + '/' + url);
    }
    return encodeURIComponent(url);
  }
}
