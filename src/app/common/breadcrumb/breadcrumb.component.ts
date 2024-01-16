import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule, TranslateModule, CommonModule, HeaderComponent],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  @Input() childPage: string | undefined;
  language: string | null;
  constructor(private dataService: DataService) {
    this.language = localStorage.getItem('language');
    setTimeout(() => {
      this.dataService.pageChanged.subscribe(() => {
        this.language = localStorage.getItem('language');
      })
    })
  }
}
