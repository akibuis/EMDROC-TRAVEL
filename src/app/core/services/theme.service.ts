import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly isLight = signal(this.load());

  constructor() {
    effect(() => {
      const light = this.isLight();
      document.documentElement.classList.toggle('light-mode', light);
      document.body.classList.toggle('light-mode', light);
      localStorage.setItem('emdroc-theme', light ? 'light' : 'dark');
    });
  }

  toggle(): void {
    this.isLight.update((v) => !v);
  }

  private load(): boolean {
    return localStorage.getItem('emdroc-theme') !== 'dark';
  }
}
