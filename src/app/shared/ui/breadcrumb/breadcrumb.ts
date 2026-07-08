import { Component, input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  readonly title = input('');
  readonly subtitle = input('');
}
