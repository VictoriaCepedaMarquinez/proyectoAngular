import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClothingListComponent } from './clothing-list/clothing-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClothingListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'toia';
}
