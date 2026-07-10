import { Component, signal, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';
import { Footer } from '../footer/footer';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Footer, ScrollToTop],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {
  protected readonly isScrolled = signal(false);
  protected readonly mobileOpen = signal(false);

  constructor(protected readonly theme: ThemeService) {}

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  protected closeMenu(): void {
    this.mobileOpen.set(false);
  }

  protected readonly navLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Destinations', route: '/destinations' },
    { label: 'Insights', route: '/blog' },
    { label: 'Contact', route: '/contact' },
  ];
}
