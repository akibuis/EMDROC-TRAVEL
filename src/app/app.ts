import { Component } from '@angular/core';
import { Shell } from './layout/shell/shell';
import { Preloader } from './shared/components/preloader/preloader';

@Component({
  selector: 'app-root',
  imports: [Shell, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
