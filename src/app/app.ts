import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { CategoryNav } from './components/category-nav/category-nav';
import { ProductCard } from './components/product-card/product-card';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [Header, CategoryNav, ProductCard, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categoryTitle = 'Kategoriler';
  productCount = 2284;
  categories = [
    'Tümü',
    'Elbise',
    'Bluz',
    'Gömlek',
    'Atlet',
    'Kazak',
    'Pantolon',
    'Etek',
    'Şort',
    'Dış Giyim',
    'Hırka',
    'Ayakkabı',
    'Aksesuar',
    'Ceket',
    'Yelek'
  ];
  products: Product[] = [
    {
      name: 'Lacivert Keten Yelek',
      price: 3999.95,
      colors: 2,
      images: [
        'images/products/product-1.jpg',
        'images/products/product-1-2.jpg',
        'images/products/product-1-3.jpg',
        'images/products/product-1-4.jpg'
      ]
    },
    {
      name: 'Lacivert Beli Bağcıklı Bol Paça Pantolon',
      price: 3999.95,
      colors: 2,
      images: [
        'images/products/product-2.jpg',
        'images/products/product-2-2.jpg',
        'images/products/product-2-3.jpg',
        'images/products/product-2-4.jpg'
      ]
    },
    {
      name: 'Lacivert Askılı Keten Elbise',
      price: 4999.95,
      images: [
        'images/products/product-3.jpg',
        'images/products/product-3-2.jpg',
        'images/products/product-3-3.jpg',
        'images/products/product-3-4.jpg'
      ]
    },
    {
      name: 'Mavi Desenli Şal',
      price: 1999.95,
      images: [
        'images/products/product-4.jpg',
        'images/products/product-4-2.jpg',
        'images/products/product-4-3.jpg'
      ]
    },
    {
      name: 'Lacivert Askılı Keten Bluz', price: 1999.95,
      images: ['images/products/product-5.jpg', 'images/products/product5-2.jpg']
    },
    {
      name: 'Lacivert Düğme Detaylı Keten Pantolon', price: 3499.95,
      images: ['images/products/product-6.jpg', 'images/products/product-6-2.jpg']
    },
    {
      name: 'Beyaz Rahat Kesim Bluz', price: 2799.95,
      images: ['images/products/product-7.jpg', 'images/products/product-7-2.jpg']
    },
    {
      name: 'Beyaz Beli Lastikli Bol Paça Pantolon', price: 2999.95,
      images: ['images/products/product-8.jpg', 'images/products/product-8-2.jpg']
    },
    {
      name: 'Beyaz Dik Yaka Kolsuz Poplin Bluz', price: 1999.95,
      images: ['images/products/product-9.jpg', 'images/products/product-9-2.jpg']
    },
    {
      name: 'Lacivert Kolsuz Elbise', price: 3999.95,
      images: ['images/products/product-10.jpg', 'images/products/product-10-2.jpg']
    },
    {
      name: 'Kemik Kruvaze Gabardin Ceket', price: 6999.95,
      images: ['images/products/product-11.jpg', 'images/products/product-11-2.jpg']
    },
    {
      name: 'Kemik Geniş Paça Cepli Gabardin Pantolon', price: 3999.95,
      images: ['images/products/product-12.jpg', 'images/products/product-12-2.jpg']
    },
    {
      name: 'Siyah Bol Paça Pantolon', price: 1999.95,
      images: ['images/products/product-13.jpg', 'images/products/product-13-2.jpg']
    },
    {
      name: 'Gri Bağlama Detaylı Yelek', price: 4999.95,
      images: ['images/products/product-14.jpg', 'images/products/product-14-2.jpg']
    },
    {
      name: 'Gri Gabardin Bol Pantolon', price: 3999.95,
      images: ['images/products/product-15.jpg', 'images/products/product-15-2.jpg']
    },
    {
      name: 'Siyah Bağlama Detaylı Bluz', price: 1999.95,
      images: ['images/products/product-16.jpg', 'images/products/product-16-2.jpg']
    },
    {
      name: 'Siyah Bol Pantolon', price: 5999.95,
      images: ['images/products/product-17.jpg', 'images/products/product-17-2.jpg']
    },
    {
      name: 'Mor Cep Detaylı Ceket', price: 3999.95,
      images: ['images/products/product-18.jpg', 'images/products/product-18-2.jpg']
    },
    {
      name: 'Mor Pileli Rayon Bol Paça Pantolon', price: 5999.95,
      images: ['images/products/product-19.jpg', 'images/products/product-19-2.jpg']
    },
    {
      name: 'Lacivert Düğme Detaylı Ceket', price: 2999.95,
      images: ['images/products/product-20.jpg', 'images/products/product-20-2.jpg']
    }
  ];
  gridColumns: number = 4;

}
