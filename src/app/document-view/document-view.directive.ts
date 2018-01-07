import { element } from 'protractor';
import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Output
} from '@angular/core';
import { ViewProviders } from './models/ViewProviders';
import { UriBuilder } from 'uribuilder';
import { cleanPath } from 'cleanPath';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/operator/toPromise';
import 'rxjs/operator/takeUntil';
import { Directive } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: 'iframe[ngx-document]'
})
export class DocumentViewDirective implements OnInit {
  private _provider: ViewProviders = ViewProviders.google;
  private _originSrc: string;
  /**
   * 檢視器提供者
   */
  @Input()
  public set provider(value: ViewProviders) {
    this._provider = value;
    this.ngOnInit();
  }

  public get provider(): ViewProviders {
    return this._provider;
  }

  @Output() public providerChange = new EventEmitter<ViewProviders>();

  /**
   * 原始文件連結
   */
  public get originSrc(): string {
    return this._originSrc;
  }

  constructor(private iframe: ElementRef) {
    this._originSrc = (this.iframe.nativeElement as HTMLIFrameElement).src;
  }

  ngOnInit(): void {
    (this.iframe
      .nativeElement as HTMLIFrameElement).src = this.getDocumentUrl();
  }

  /**
   * 根據對應的檢視器提供者產生文件網址
   */
  public getDocumentUrl(): string {
    if (this.provider === ViewProviders.google) {
      return (
        'http://docs.google.com/gview?url=' +
        encodeURI(this._originSrc) +
        '&embedded=true'
      );
    } else if (this.provider === ViewProviders.microsoft) {
      return (
        'https://view.officeapps.live.com/op/embed.aspx?src=' +
        encodeURI(this._originSrc)
      );
    }

    return null;
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
