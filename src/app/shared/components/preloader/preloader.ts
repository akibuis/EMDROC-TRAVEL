import { Component, NgZone, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-preloader',
  imports: [],
  templateUrl: './preloader.html',
  styleUrl: './preloader.css',
})
export class Preloader implements OnDestroy {
  protected hidden = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  constructor(private zone: NgZone) {
    this.zone.runOutsideAngular(() => {
      this.timer = setTimeout(() => {
        this.zone.run(() => {
          this.hidden = true;
        });
      }, 1500);
    });
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
}
