import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Destinations', href: '#' },
    { label: 'Travel Packages', href: '#' },
    { label: 'Corporate Services', href: '#' },
    { label: 'Visa Assistance', href: '#' },
  ];

  protected readonly services = [
    { label: 'Flight Booking', href: '#' },
    { label: 'Hotel Reservations', href: '#' },
    { label: 'Tour Packages', href: '#' },
    { label: 'Airport Transfers', href: '#' },
    { label: 'Travel Insurance', href: '#' },
  ];

  protected readonly contactInfo = [
    { label: 'info@emdroctravel.com', href: 'mailto:info@emdroctravel.com' },
    { label: '+234 800 EMDROC', href: 'tel:+234800363762' },
    { label: 'Lagos, Nigeria', href: '#' },
  ];

  protected readonly socials = [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'X', href: '#' },
  ];
}
