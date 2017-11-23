import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './routes';
import { MyLibModule } from '@nglib/mylib';
import { ApplicationContainer } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MyLibModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, { useHash: false }),
  ],
  declarations: [ApplicationContainer],
  bootstrap: [ApplicationContainer],
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    console.group('APPLICATION REFERENCE');
    console.dir(appRef);
    console.groupEnd();
  }
}
