import { Component } from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {FormType} from "./types/form.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
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

  public products: ProductType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      count: 1,
      price: '1,70'
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      count: 1,
      price: '1,70'
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      count: 1,
      price: '1,70'
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      count: 1,
      price: '1,70'
    }
  ];

  public formValues: FormType = {
    productTitle: '',
    address: '',
    phone: ''
  };

  public showPresent: boolean = true;
  public phone: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com/';

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

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
  }
}
