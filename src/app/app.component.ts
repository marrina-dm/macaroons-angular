import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {FormType} from "./types/form.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public isOpen: boolean = false;
  public advantages: AdvantageType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  public products: ProductType[] = [];

  public formValues: FormType = {
    productTitle: '',
    address: '',
    phone: ''
  };

  public showPresent: boolean = true;
  public phone: string = '375293689868';
  public instagramLink: string = 'https://www.instagram.com/';

  constructor(private productService: ProductService,
              public cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public openMenu(): void {
    this.isOpen = true;
  }

  public closeMenu(target?: HTMLElement): void {
    this.isOpen = false;

    if (target) {
      this.scrollTo(target);
    }
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCart(product: string): void {
    alert(product + ' добавлен в корзину!');
  }
}
