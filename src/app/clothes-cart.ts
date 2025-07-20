import { Injectable } from '@angular/core';
import { clothes } from './clothing-list/clothes'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothesCart {
  private cartList: clothes[] = [];
  public cartList$: BehaviorSubject<clothes[]> = new BehaviorSubject(this.cartList);

  addToCart(clothe: clothes): void {
    const item = this.cartList.find((v1) => v1.name === clothe.name);

    if (!item) {
      this.cartList.push({ ...clothe });
    } else {
      item.quantity += clothe.quantity;
    }

    // Actualiza el BehaviorSubject con la nueva lista
    this.cartList$.next(this.cartList);

    console.log('Producto agregado al carrito:', clothe);
  }
}
