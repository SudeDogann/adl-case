import { Component, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-product-card',
  imports: [DecimalPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  product = input.required<Product>();

  currentImageIndex = signal(0);

  nextImage() {
    const images = this.product().images;

    this.currentImageIndex.update(index =>
      (index + 1) % images.length
    );
  }

  previousImage() {
    const images = this.product().images;

    this.currentImageIndex.update(index =>
      (index - 1 + images.length) % images.length
    );
  }
}