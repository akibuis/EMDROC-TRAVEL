import { Component } from '@angular/core';

@Component({
  selector: 'app-airline-partners',
  imports: [],
  templateUrl: './airline-partners.html',
  styleUrl: './airline-partners.css',
})
export class AirlinePartners {
  logos = [
    'partners/british-airways.png',
    'partners/air-france.png',
    'partners/klm.png',
    'partners/qatar-airways.png',
    'partners/lufthansa.png',
    'partners/emirates.png',
    'partners/virgin-atlantic.png',
    'partners/arik-air.png',
  ];
}
