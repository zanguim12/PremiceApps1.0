import { isPlatformServer } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, StateKey, TransferState, makeStateKey } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AngularSvgIconModule, SvgHttpLoader, SvgIconRegistryService, SvgLoader } from 'angular-svg-icon';

import { Observable } from 'rxjs';
import { routes } from './app.routes';

import * as path from 'path';
import * as url from 'url';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
const join = path.join;
const resolve = path.resolve;
const parseUrl = url.parse;
const baseName = path.basename;


/* //const fs = require('fs');
const join = require('path').join;
const resolve = require('path').resolve;
const parseUrl = require('url').parse;
const baseName = require('path').basename;
 */
export class SvgServerLoader implements SvgLoader {

  constructor(private http: HttpClient,private iconPath: string,
              private transferState: TransferState) {
  }

  getSvg(url: string): Observable<string> {
    const parsedUrl: url.UrlWithStringQuery = parseUrl(url);
    const fileNameWithHash = baseName(parsedUrl.pathname!);

    // Remove content hashing
    const fileName = fileNameWithHash.replace(/^(.*)(\.[0-9a-f]{16,})(\.svg)$/i, '$1$3');
    const filePath = join(this.iconPath, fileName);

    return this.http.get(filePath, { responseType: 'text' });

    /* return new Observable(observer => {
      const svgData = fs.readFileSync(resolve(__dirname, filePath), 'utf8');

      // Here we save the translations in the transfer-state
      const key: StateKey<number> = makeStateKey<number>('transfer-svg:' + url);
      this.transferState.set(key, svgData);

      observer.next(svgData);
      observer.complete();
    }); */
  }
}
export class SvgBrowserLoader implements SvgLoader {
  constructor(private http: HttpClient, private transferState: TransferState) {
  }

  getSvg(url: string): Observable<string> {
    const key: StateKey<number> = makeStateKey<number>('transfer-svg:' + url);
    const data = this.transferState.get(key, null);
    // First we are looking for the translations in transfer-state, if none found, http load as fallback
    if (data) {
      return new Observable(observer => {
        observer.next(data as any);
        observer.complete();
      });
    } else {
      return new SvgHttpLoader(this.http).getSvg(url);
    }
  }
}


export function svgLoaderFactory(http: HttpClient, transferState: TransferState, platformId: any): SvgServerLoader | SvgBrowserLoader {
  if (isPlatformServer(platformId)) {
    return new SvgServerLoader(http,'../browser/assets', transferState);
  } else {
    return new SvgBrowserLoader(http, transferState);
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    AngularSvgIconModule,
    {
      provide: SvgHttpLoader,
      useFactory: (http: HttpClient) => new SvgHttpLoader(http),
      deps: [HttpClient]
    },
    SvgIconRegistryService,
    {
      provide: SvgLoader,
      useFactory: svgLoaderFactory,
      deps: [HttpClient, TransferState]
    }, provideAnimationsAsync()
  ]
};
