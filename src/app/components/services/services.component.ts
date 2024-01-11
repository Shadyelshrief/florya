import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { simpleIobroker } from '@ng-icons/simple-icons';
import { tablerPerfume } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [provideIcons({tablerPerfume, simpleIobroker})],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
