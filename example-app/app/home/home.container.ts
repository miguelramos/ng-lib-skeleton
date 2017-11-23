import { Component, HostBinding, OnInit } from '@angular/core';

import { ExampleLib } from '@nglib/mylib';

@Component({
  selector: 'ngh-home',
  templateUrl: './home.template.html',
})
export class HomeContainer implements OnInit {
  @HostBinding('attr.id') uiID = 'home';

  message: string;

  constructor(private example: ExampleLib) {}

  ngOnInit() {
    this.message = this.example.getMessage();
  }
}
