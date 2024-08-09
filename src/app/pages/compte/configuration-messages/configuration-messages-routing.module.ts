import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationMessageComponent } from './configuration-message/configuration-message.component';

const routes: Routes = [
  { path: '', component: ConfigurationMessageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationMessagesRoutingModule { }
