import { Component } from '@angular/core';
import { ClothingListComponent } from '../clothing-list/clothing-list';
import { CartComponent } from '../cart/cart'; // este es el import correcto

@Component({
  selector: 'app-toia-clothes',
  standalone: true,
  imports: [ClothingListComponent, CartComponent],
  templateUrl: './toia-clothes.html',
  styleUrls: ['./toia-clothes.css']
})
export class ToiaClothes {}
