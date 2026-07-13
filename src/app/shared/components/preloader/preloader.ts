import { Component, afterNextRender, ChangeDetectorRef, OnDestroy, inject } from '@angular/core';

@Component({
  selector: 'app-preloader',
  imports: [],
  templateUrl: './preloader.html',
  styleUrl: './preloader.css',
})
export class Preloader implements OnDestroy {
  protected hidden = false;
  private timer: ReturnType<typeof setTimeout> | null = null;
  private cdr = inject(ChangeDetectorRef);

  constructor() {
    afterNextRender(() => {
      this.timer = setTimeout(() => {
        this.hidden = true;
        this.cdr.detectChanges();
      }, 1500);
    });
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
