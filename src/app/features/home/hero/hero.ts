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
  protected readonly isHovering = signal(false);

  ngOnInit(): void {
    this.startAutoRotate();
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  private startAutoRotate(): void {
    this.autoRotateInterval = setInterval(() => {
      if (!this.isHovering()) {
        this.activeIndex.update(i => (i + 1) % this.destinations.length);
      }
    }, 6000);
  }

  private stopAutoRotate(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
    }
  }

  protected prev(): void {
    this.activeIndex.update(i => (i - 1 + this.destinations.length) % this.destinations.length);
  }

  protected next(): void {
    this.activeIndex.update(i => (i + 1) % this.destinations.length);
  }

  protected goTo(index: number): void {
    this.activeIndex.set(index);
  }

  protected onMouseEnter(): void {
    this.isHovering.set(true);
  }

  protected onMouseLeave(): void {
    this.isHovering.set(false);
  }

  protected cardStyle(index: number): Record<string, string> {
    const total = this.destinations.length;
    const active = this.activeIndex();
    const diff = (index - active + total) % total;

    if (diff === 0) {
      return {
        width: '100%',
        height: '100%',
        transform: 'translateX(0) scale(1)',
        opacity: '1',
        filter: 'brightness(1)',
        zIndex: String(total),
        pointerEvents: 'auto',
      };
    }

    const side = diff <= total / 2 ? 'left' : 'right';
    const distance = Math.min(diff, total - diff);
    const offsetX = side === 'left' ? -distance * 30 : distance * 30;
    const scale = Math.max(0.7, 1 - distance * 0.1);
    const opacity = Math.max(0, 1 - distance * 0.25);

    return {
      width: `${100 - distance * 10}%`,
      height: `${100 - distance * 10}%`,
      transform: `translateX(${offsetX}px) scale(${scale})`,
      opacity: String(opacity),
      filter: `brightness(${Math.max(0.4, 1 - distance * 0.15)})`,
      zIndex: String(total - distance),
      pointerEvents: 'none',
    };
  }
}