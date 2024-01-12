import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { PageTitleComponent } from '../../common/page-title/page-title.component';
import { BreadcrumbComponent } from '../../common/breadcrumb/breadcrumb.component';
import { ContactUsDetailsComponent } from '../contact-us-details/contact-us-details.component';
import { FooterComponent } from '../../common/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, PageTitleComponent, BreadcrumbComponent, ContactUsDetailsComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
