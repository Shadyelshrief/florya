import { Component } from '@angular/core';
import { FooterComponent } from '../../common/footer/footer.component';
import { HeaderComponent } from '../../common/header/header.component';
import { CeoComponent } from '../ceo/ceo.component';
import { CompanyComponent } from '../company/company.component';
import { ServicesComponent } from '../services/services.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SliderComponent, CompanyComponent, CeoComponent, ServicesComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
