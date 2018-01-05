import { element } from 'protractor';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ViewProviders } from '../models/ViewProviders';
import { UriBuilder } from 'uribuilder';
import { cleanPath } from 'cleanPath';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/operator/toPromise';
import 'rxjs/operator/takeUntil';
@Component({
  selector: 'ngx-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;

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

  public get iframeUrl(): string {
    if (this.provider === ViewProviders.Google) {
      return (
        'http://docs.google.com/gview?url=' +
        encodeURI(this.src) +
        '&embedded=true'
      );
    } else if (this.provider === ViewProviders.Microsoft) {
      return (
        'https://view.officeapps.live.com/op/embed.aspx?src=' +
        encodeURI(this.src)
      );
    }

    return null;
  }
  constructor() {}
  loadOK = false;
  ngOnInit() {
    const sub = TimerObservable.create(6000, 6000).subscribe(x => {
      if (this.loadOK) {
        sub.unsubscribe();
        return;
      }
      (this.iframe.nativeElement as HTMLIFrameElement).src = this.iframeUrl;
    });
  }
  console() {
    console.log('GOGO');
  }
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
