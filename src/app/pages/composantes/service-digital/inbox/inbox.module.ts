import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InboxRoutingModule
  ],
  exports: [
    InboxRoutingModule
  ]
})
export class InboxModule {

}
