import { NgModule } from '@angular/core';

import { ExampleLib } from './example';

@NgModule({
  providers: [{ provide: ExampleLib, useClass: ExampleLib }],
})
export class MyLibModule {}
