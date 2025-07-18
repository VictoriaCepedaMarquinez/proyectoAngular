import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToiaClothes } from './toia-clothes/toia-clothes';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule, // necesario para usar routerLink en el HTML
    ToiaClothes
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'toia';
}
