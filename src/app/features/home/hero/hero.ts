import { Component, signal, computed, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HERO_DESTINATIONS, Destination } from '../../../core/models/destination.model';

interface CardStyle {
  transform: string;
  opacity: number;
  filter: string;
  zIndex: number;
  width: string;
  height: string;
  pointerEvents: 'auto' | 'none';
}

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private autoRotateInterval: ReturnType<typeof setInterval> | undefined;
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  protected readonly destinations = HERO_DESTINATIONS;
  protected readonly activeIndex = signal(0);
  protected readonly isHovering = signal(false);
  protected readonly isAnimating = signal(false);

  protected readonly activeDestination = computed(() => this.destinations[this.activeIndex()]);

  protected cardStyle(index: number): CardStyle {
    const total = this.destinations.length;
    const dist = (index - this.activeIndex() + total) % total;

    switch (dist) {
      case 0:
        return {
          transform: 'translateX(20px) scale(1) rotate(0deg)',
          opacity: 1,
          filter: 'saturate(1)',
          zIndex: 30,
          width: '300px',
          height: '380px',
          pointerEvents: 'auto',
        };
      case 1:
        return {
          transform: 'translateX(-50px) scale(0.85) rotate(-3deg)',
          opacity: 0.75,
          filter: 'saturate(0.7)',
          zIndex: 20,
          width: '260px',
          height: '330px',
          pointerEvents: 'none',
        };
      case 2:
        return {
          transform: 'translateX(-140px) scale(0.7) rotate(-8deg)',
          opacity: 0.5,
          filter: 'saturate(0.4)',
          zIndex: 10,
          width: '220px',
          height: '280px',
          pointerEvents: 'none',
        };
      default:
        return {
          transform: `translateX(${dist === total - 1 ? '180px' : '-260px'}) scale(0.5) rotate(0deg)`,
          opacity: 0,
          filter: 'saturate(0)',
          zIndex: 0,
          width: '200px',
          height: '250px',
          pointerEvents: 'none',
        };
    }
  }

  protected backgroundImage(index: number): string {
    return this.destinations[index].backgroundImage;
  }

  protected frontBackground(): string {
    return this.activeDestination().backgroundImage;
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoRotate();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoRotate();
  }

  protected next(): void {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeIndex.update(i => (i + 1) % this.destinations.length);
    setTimeout(() => this.isAnimating.set(false), 500);
    this.resetAutoRotate();
  }

  protected prev(): void {
    if (this.isAnimating()) return;
    this.isAnimating.set(true);
    this.activeIndex.update(i => (i - 1 + this.destinations.length) % this.destinations.length);
    setTimeout(() => this.isAnimating.set(false), 500);
    this.resetAutoRotate();
  }

  protected goTo(index: number): void {
    if (this.isAnimating() || index === this.activeIndex()) return;
    this.isAnimating.set(true);
    this.activeIndex.set(index);
    setTimeout(() => this.isAnimating.set(false), 500);
    this.resetAutoRotate();
  }

  protected onMouseEnter(): void {
    this.isHovering.set(true);
    this.stopAutoRotate();
  }

  protected onMouseLeave(): void {
    this.isHovering.set(false);
    this.startAutoRotate();
  }

  private startAutoRotate(): void {
    if (!this.isBrowser) return;
    this.stopAutoRotate();
    this.autoRotateInterval = setInterval(() => {
      if (!this.isHovering()) {
        this.next();
      }
    }, 6000);
  }

  private stopAutoRotate(): void {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = undefined;
    }
  }

  private resetAutoRotate(): void {
    this.stopAutoRotate();
    this.startAutoRotate();
  }
}