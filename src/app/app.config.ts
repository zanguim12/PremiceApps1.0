import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { SvgIconRegistryService, SvgHttpLoader, AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClient, provideHttpClient } from '@angular/common/http';


function provideAngularSvgIconModule(): Provider[] {
  return [
    AngularSvgIconModule.forRoot(),
    {
      provide: SvgHttpLoader,
      useFactory: (http: HttpClient) => new SvgHttpLoader(http),
      deps: [HttpClient]
    },
    SvgIconRegistryService
  ];
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    AngularSvgIconModule.forRoot(),
    {
      provide: SvgHttpLoader,
      useFactory: (http: HttpClient) => new SvgHttpLoader(http),
      deps: [HttpClient]
    },
    SvgIconRegistryService
  ]
};
