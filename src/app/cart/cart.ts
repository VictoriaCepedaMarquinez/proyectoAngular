import { Component } from '@angular/core';
import { ClothesCart } from '../clothes-cart';
import { clothes } from '../clothing-list/clothes';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true, 
  imports: [CommonModule],      
  templateUrl: './cart.html',
  styleUrls: ['./cart.css'] 
})
export class CartComponent {
  cartList$: Observable <clothes[]>; 
  constructor(private cartService: ClothesCart) {
    this.cartList$ = cartService.cartList$.asObservable();
  }
}
