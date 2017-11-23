import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, ApplicationRef } from '@angular/core';

import { routes } from './home.routes';
import { HomeContainer } from './home.container';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HomeContainer],
  exports: [RouterModule],
})
export class HomeModule {
  constructor(appRef: ApplicationRef) {
    console.group('HOME REFERENCE');
    console.dir(appRef);
    console.groupEnd();
  }
}
