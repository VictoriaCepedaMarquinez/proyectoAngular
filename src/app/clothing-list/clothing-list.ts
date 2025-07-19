import { Component } from '@angular/core';
import { clothes } from './clothes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from '../input-integer/input-integer';


@Component({
  selector: 'app-clothing-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputIntegerComponent], 
  templateUrl: './clothing-list.html',
  styleUrls: ['./clothing-list.css']
})
export class ClothingListComponent {
  clothes: clothes[] = [
    {
      name: 'Campera Shift',
      description: 'Campera de nylon rellena con guata matelaseada, forrada en polar al tono. Capucha incorporada forrada en polar con elastico y tanca para ajustar. Cierre frontal. Posee multiples bolsillos tanto externos como internos.Todos los avíos son marcarios al tono. Elastico circular en bajo con tanca para ajustar.',
      price: 45000,
      stock: 20,
      imagenNormal: 'assets/img/campera.webp',
      imagenHover: 'assets/img/camperaHover.webp',
      imagen: 'assets/img/campera.webp',
      clearance: false,
      quantity: 0,
    },
    {
      name: 'Chaleco Gummy',
      description: 'Chaleco oversize en nylon con relleno fake feather. Forrería interna en mismo color de tela base. Cierre central en mismo color. Bolsillo delantero con cierre cubierto por pestaña en tela base. Capucha incorporada forrada en mismo color de tela base. Múltiples bolsillos. Accesorios personalizados de marca.',
      price: 25000,
      stock: 15,
      imagenNormal: 'assets/img/chaleco.webp',
      imagenHover: 'assets/img/chalecoHover.webp',
      imagen: 'assets/img/chaleco.webp',
      clearance: true,
      quantity: 0,
    },
    {
      name: 'Polera Endless',
      description: 'Polera basica de modal gamuzado. Abertura en manga para pasar el dedo pulgar. Cuello doble aplicado. Grifa institucional en ruedo izquierdo.',
      price: 15000,
      stock: 0,
      imagenNormal: 'assets/img/polera.webp',
      imagenHover: 'assets/img/poleraHover.webp',
      imagen: 'assets/img/polera.webp',
      clearance: false,
      quantity: 0,
    }
  ];

  cambiarImagen(prenda: any) {
    prenda.imagen = prenda.imagenHover;
  }

  restaurarImagen(prenda: any) {
    prenda.imagen = prenda.imagenNormal;
  }


}
