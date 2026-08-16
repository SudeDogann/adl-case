import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-category-nav',
  imports: [],
  templateUrl: './category-nav.html',
  styleUrl: './category-nav.css'
})
export class CategoryNav {

  categories = input<string[]>([]);

  categorySelected = output<string>();

  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}