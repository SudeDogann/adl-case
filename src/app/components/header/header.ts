import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  isCategoryMenuOpen = signal(false);
  isSaleMenuOpen = signal(false);
  isMertAslanMenuOpen = signal(false);
  isOutletMenuOpen = signal(false);
  isMobileMenuOpen = signal(false);

}
