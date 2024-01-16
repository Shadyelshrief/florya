import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { ProductsDetailsComponent } from '../products-details/products-details.component';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../common/services/data.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, FooterComponent, ProductsDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  title: string | undefined;
  pageTitle: string | undefined;
  pageTitle1: string | undefined;
  products: string | undefined;
  constructor(private translate: TranslateService,
    private dataService: DataService) {
    this.getTranslation()
    setTimeout(() => {
      this.dataService.pageChanged.subscribe(() => {
        this.getTranslation()
      })
    })
  }

  getTranslation() {
    this.translate.get('HOME.PRODUCTS').subscribe((translated: string) => {
      this.title = translated;
      this.pageTitle = this.translate.instant('ABOUT.TITLE_DESC');
      this.pageTitle1 = this.translate.instant('ABOUT.TITE_DESC1');
      this.products = this.translate.instant('HOME.PRODUCTS');
    })
  }
}
