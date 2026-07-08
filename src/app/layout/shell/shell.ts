import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Footer } from '../footer/footer';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, Navbar, Footer, ScrollToTop],
  templateUrl: './shell.html',
  styleUrl: './shell.css',
})
export class Shell {}
