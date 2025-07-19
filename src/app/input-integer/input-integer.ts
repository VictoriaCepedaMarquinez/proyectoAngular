import { Component, input, Input, Output, output } from '@angular/core';
import { clothes } from '../clothing-list/clothes'; 
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: true,
  templateUrl: './input-integer.html',
  styleUrls: ['./input-integer.css'],
  imports: [ FormsModule]
})
export class InputIntegerComponent {
  @Input() 
  quantity !: number;

  @Input()
  max !: number;

  @Output()
  quantityChange : EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: Event): void {
    console.log(event.target);
    this.quantityChange.emit(this.quantity);
  }
}
