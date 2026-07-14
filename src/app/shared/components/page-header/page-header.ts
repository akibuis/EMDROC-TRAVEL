import { Component, Input } from '@angular/core';

const FALLBACK_IMAGE = '/about/lagos-aerial.jpg';

@Component({
  selector: 'app-page-header',
  imports: [],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
})
export class PageHeader {
  @Input({ required: true }) title!: string;
  @Input() description?: string;
  @Input() backgroundImage?: string;

  protected get bgImage(): string {
    return this.backgroundImage || FALLBACK_IMAGE;
  }
}
