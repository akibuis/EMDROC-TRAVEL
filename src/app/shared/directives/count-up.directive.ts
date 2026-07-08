import { Directive, ElementRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true,
})
export class CountUpDirective implements OnDestroy {
  private observer: IntersectionObserver | null = null;
  private animated = false;
  private target = 0;

  @Input({ required: true }) set appCountUp(value: number) {
    this.target = value;
    this.el.nativeElement.textContent = '0';
  }

  @Input() countUpDuration = 2000;

  constructor(private el: ElementRef<HTMLElement>) {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !this.animated) {
        this.animated = true;
        this.observer?.disconnect();
        this.animate();
      }
    }, { threshold: 0.5 });
    this.observer.observe(this.el.nativeElement);
  }

  private animate(): void {
    const start = performance.now();
    const frame = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / this.countUpDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * this.target);
      this.el.nativeElement.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
