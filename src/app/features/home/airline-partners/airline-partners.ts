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
    'partners/KLM.png',
    'partners/qatar-airways.png',
    'partners/Lufthansa.png',
    'partners/Emirates.png',
    'partners/virgin-atlantic.png',
    'partners/arik-air.png',
    'partners/Aero.png',
    'partners/Qantas.png',
  ];
}
