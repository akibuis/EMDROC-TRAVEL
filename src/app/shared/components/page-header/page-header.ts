import { Component, Input } from '@angular/core';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80';

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
