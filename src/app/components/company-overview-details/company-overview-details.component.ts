import { Component } from '@angular/core';
import { CommonSidebarComponent } from '../../common/common-sidebar/common-sidebar.component';

@Component({
  selector: 'app-company-overview-details',
  standalone: true,
  imports: [CommonSidebarComponent],
  templateUrl: './company-overview-details.component.html',
  styleUrl: './company-overview-details.component.scss'
})
export class CompanyOverviewDetailsComponent {

}
