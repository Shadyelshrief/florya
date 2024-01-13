import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent {
   products = [{
    path:'e542d52f-6ca5-4a5b-85de-1085e9ad844b.jpg',
    name: 'Angle Grinder'
  },
  {
    path:'3de3eb63-7a55-4901-90b3-3cea6a688834.jpg',
    name: 'automatic voltage regulator'
  },
  {
    path:'0e9275e7-2fea-4264-9008-e78df8fda9df.jpg',
    name: 'Bolts'
  },
  {
    path:'6ea27024-c6c5-48ad-ad96-f1070e9b00a8.jpg',
    name: 'containerized tanks'
  },
  {
    path:'42b10c75-eaef-44f1-b4d8-ec8acc54a7a4.jpg',
    name: 'Conveyor'
  },
  {
    path:'6d858ee3-eafc-46e9-8dee-3e6330ed5f30.jpg',
    name: 'Electrical box'
  },
  {
    path:'8874d696-fa87-4838-adfc-774089b7754f.jpg',
    name: 'EX socket and plug (Explosion-proof)'
  },
  {
    path:'7d61f41d-714e-426e-948e-35c26f435de6.jpg',
    name: 'Flanges and Accessories'
  },
  {
    path:'d5c7b9fa-e880-47ff-b93d-be89ff3e03da.jpg',
    name: 'Hydraulic-pallet-handtruck'
  },
  {
    path:'c16b3ad5-d971-43cd-8e82-7ec8e48b7e7c.jpg',
    name: 'Manual Level Measurement'
  },
  {
    path:'bbe23ec3-11ca-4233-8da7-b110129024d8.jpg',
    name: 'Motor Operated Valve'
  },
  {
    path:'69c6a8f7-233a-4b64-9442-b8148dbc4300.jpg',
    name: 'Multimeter'
  },
  {
    path:'e8b98805-955d-454c-9f3d-78b1db87e948.jpg',
    name: 'Oil And Chemical Spill Kits'
  },
  {
    path:'30a7201c-17ad-43ee-a9b5-735b96626a25.jpg',
    name: 'Rockwool insulation'
  },
  {
    path:'cff7b478-919d-4612-a25b-c0cc92f259b7.jpg',
    name: 'Rubber washer'
  },
  {
    path:'3a91f8ba-4289-4bb6-9681-69e7650160ed.jpg',
    name: 'Seal (PTFE)'
  },
  {
    path:'d42a3d10-b6f8-4b61-8e4d-871127f6e6f3.jpg',
    name: 'Stud and nut'
  },
  {
    path:'75e7fb8d-9924-44de-ab64-56c74b8716e4.jpg',
    name: 'Todomatic'
  },
  {
    path:'92df4d21-67ba-478f-962e-1471c270ceb6.jpg',
    name: 'Tool box'
  },
  {
    path:'ffe2fd5b-5127-42f9-b209-7bf9e75916b0.jpg',
    name: 'Wood pallet'
  },
  {
    path:'4bcc13f2-ed0d-416e-9994-0bfeb33654a0.jpg',
    name: 'Water finding paste'
  },
  {
    path:'ab9ff4f6-a313-4bf3-8caf-cbb20eb95889.jpg',
    name: 'ZINC PLATED HOSE CLIPS'
  },
  {
    path:'5fed8965-740f-455a-ac8c-c9d2d71d4c28.jpg',
    name: 'GRP Panel'
  },
  {
    path:'427d3a69-0fa4-4ed5-a985-b0419345bdcb.jpg',
    name: 'Flanges'
  },
  {
    path:'6af5eacd-0c2e-47c9-945b-2cc3224e8c94.jpg',
    name: 'Gasket'
  },
  {
    path:'ed0683d2-3322-402b-9538-54c7a38a9c93.jpg',
    name: 'Air and Vapor Eliminators'
  }]

}
