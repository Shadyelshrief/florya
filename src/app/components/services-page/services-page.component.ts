import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { ServicesDetailsComponent } from '../services-details/services-details.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, FooterComponent, ServicesDetailsComponent],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {

}
