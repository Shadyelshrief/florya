import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {


  responsiveOptions: any[] | undefined;
  ngOnInit(): void {

  }

  constructor() { }

}
