import { Component, inject } from '@angular/core';
import { TelegramService } from '../../services/telegram.service';
import { ProductsService } from '../../services/products.service';
import { ProductListComponent } from '../../component/product-list/product-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ProductListComponent],
  template: `
    <app-product-list
      title="Отдельный навык"
      subtitle="ololo1"
      [products]="products.byGroup['skill']"
    
    />
    <app-product-list
      title="Интенсивы"
      subtitle="ololo2"
      [products]="products.byGroup['intensive']"
    
    />
    <app-product-list
      title="Курсы"
      subtitle="ololo3"
      [products]="products.byGroup['course']"
    
    />
  `,
})
export class ShopComponent {
  telegram = inject(TelegramService)
  products = inject(ProductsService)
  constructor () {

    this.telegram.BackButton.hide();

    
  }

}
