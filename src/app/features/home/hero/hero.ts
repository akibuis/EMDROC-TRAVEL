import { Component, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { HERO_DESTINATIONS } from '../../../core/models/destination.model';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  private autoRotateInterval: ReturnType<typeof setInterval> | undefined;

  protected readonly destinations = HERO_DESTINATIONS;
  protected readonly activeIndex = signal(0);
  protected readonly activeDestination = computed(() => this.destinations[this.activeIndex()]);

  ngOnInit(): void {
    this.autoRotateInterval = setInterval(() => {
      this.activeIndex.update(i => (i + 1) % this.destinations.length);
    }, 6000);
  }

  ngOnDestroy(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }
}