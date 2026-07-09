import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-preloader',
  imports: [],
  templateUrl: './preloader.html',
  styleUrl: './preloader.css',
})
export class Preloader implements OnDestroy {
  protected hidden = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.timer = setTimeout(() => {
      this.hidden = true;
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
