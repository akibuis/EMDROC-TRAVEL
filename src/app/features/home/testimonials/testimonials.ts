import { Component, signal, input, OnInit, OnDestroy } from '@angular/core';
import { Testimonial } from '../../../core/models';

@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials implements OnInit, OnDestroy {
  readonly compact = input(false);
  protected readonly activeIndex = signal(0);
  private intervalId: ReturnType<typeof setInterval> | null = null;

  protected readonly testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Olumide Adebayo',
      avatar: '',
      rating: 5,
      text: 'EMDROC has transformed our executive travel operations. Their attention to detail and ability to navigate complex logistics is simply unparalleled in Nigeria.',
      trip: 'COO, West Africa Energy Group',
    },
    {
      id: '2',
      name: 'Chidi Okonkwo',
      avatar: '',
      rating: 5,
      text: 'The level of service and dedication EMDROC provides is extraordinary. They handle every aspect of our corporate travel with precision and care.',
      trip: 'CEO, Lagos Finance Corp',
    },
    {
      id: '3',
      name: 'Amina Bello',
      avatar: '',
      rating: 5,
      text: 'From visa processing to hotel bookings, EMDROC makes international travel effortless. Their team is responsive, professional, and truly world-class.',
      trip: 'Director, Abuja Trade Commission',
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  protected onHover(paused: boolean): void {
    if (paused) {
      this.stopAutoSlide();
    } else {
      this.startAutoSlide();
    }
  }

  private startAutoSlide(): void {
    this.stopAutoSlide();
    this.intervalId = setInterval(() => {
      const next = (this.activeIndex() + 1) % this.testimonials.length;
      this.activeIndex.set(next);
    }, 5000);
  }

  private stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
