import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '../../common/services/data.service';
interface service {
  name: string;
  descrption: string;
  imagePath: string;
}

@Component({
  selector: 'app-services-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.scss'
})

export class ServicesDetailsComponent {
  getService(service: { name: string; descrption: string; imagePath: string; }) {
    this.service = service;
  }

  service: service | undefined;
  services: service[] | undefined;


  constructor(private translate: TranslateService,
    private dataService: DataService) {
    this.dataService.pageChanged.subscribe(() => {
      this.getTranslatedServices()
    })
    this.getTranslatedServices()
  }

  getTranslatedServices() {
    this.translate.get('ABOUT.THE_COMPANY').subscribe((translated: string) => {
      this.services = [{
        name: this.translate.instant('HOME.BUILDING_MATERIALS'),
        descrption: this.translate.instant('SERVICES.BUILDING_MATRIALS_DESC'),
        imagePath: 'building-materials-2.jpg'
      },
      {
        name: this.translate.instant('HOME.IT_COMPUTER_EQUIPMENT'),
        descrption: this.translate.instant('SERVICES.IT_DESC'),
        imagePath: 'it.jpg'
      },
      {
        name: this.translate.instant('HOME.FUEL_SUPPLIER'),
        descrption: this.translate.instant('SERVICES.FUEL_SUPPLIER_DESC'),
        imagePath: 'Bulk-Fuel_01_image.png'
      },
      {
        name: this.translate.instant('HOME.ONSHORE_AND_OFFSHORE_OIL'),
        descrption: this.translate.instant('SERVICES.ONSHORE_AND_OFFSHORE_OIL_DESC'),
        imagePath: 'P235-1-1180x640.jpg'
      },
      {
        name: this.translate.instant('HOME.GOODS_AND_SHIPMENT_SERVICES'),
        descrption: this.translate.instant('SERVICES.GOODS_AND_SHIPMENT_SERVICES_DESC'),
        imagePath: 'shipping-services.jpg'
      },
      {
        name: this.translate.instant('HOME.PARA_PHARMACEUTICAL_PRODUCTS_WHOLESALE'),
        descrption: this.translate.instant('SERVICES.PARA_PHARMACEUTICAL_PRODUCTS_WHOLESALE_DESC'),
        imagePath: 'wholesale-pharmacy.jpg'
      },
      {
        name: this.translate.instant('HOME.WHOLESALE_OF_PERFUME_TRADING'),
        descrption: this.translate.instant('SERVICES.WHOLESALE_OF_PERFUME_TRADING_DESC'),
        imagePath: 'maxresdefault.jpg'
      },
      {
        name: this.translate.instant('HOME.SERVICES_BROKER'),
        descrption: this.translate.instant('SERVICES.SERVICES_BROKER_DESC'),
        imagePath: 'Customs-Brokerage.jpg'
      },
      {
        name: this.translate.instant('HOME.WHOLESALE_OF_FILLING_AND_PACKAGING_MATERIAL_TRADING'),
        descrption: this.translate.instant('SERVICES.WHOLESALE_OF_FILLING_AND_PACKAGING_MATERIAL_TRADING_DESC'),
        imagePath: 'maxresdefault (1).jpg'
      },
      {
        name: this.translate.instant('HOME.WHOLESALE_OF_COSMETICS_AND_TRADING'),
        descrption: this.translate.instant('SERVICES.WHOLESALE_OF_COSMETICS_AND_TRADING_DESC'),
        imagePath: 'b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg'
      },
      {
        name: this.translate.instant('HOME.IMPORTING'),
        descrption: this.translate.instant('SERVICES.IMPORTING_DESC'),
        imagePath: 'export-2015.jpg'
      }]
      this.service = this.services[0];
    })
  }

}
