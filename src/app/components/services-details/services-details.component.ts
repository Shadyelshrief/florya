import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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

service: { name: string; descrption: string; imagePath: string; } | undefined ;
services = [{
  name:'Building Materials',
  descrption: 'Electricals - Hardware - Cables -Fitting - Water Tanks - Transformers - Safety Products - Marine Lights - Doors - Marble - Paints – Power Tools – Hand toolsWooden items- Submersible pump – Valves - Water Pump Invertor - Welding electrodes',
  imagePath: 'building-materials-2.jpg'
},
{
  name:'IT Computer equipment',
  descrption: 'Laptop - Desktop - PCs - Monitors - Servers - Tablet - PCs - Projectors - Voice  Dictation - SSD - Flash Memory - Hard Drives - Optical Drives - Drives - Keyboards -Mice - Desktop Sets - Headsets - Microphones - Headphones - Game Controllers - Surge Protectors/UPS - Speakers – Webcams.',
  imagePath: 'it.jpg'
},
{
  name:'Fuel supplier',
  descrption: 'Florya General Trading is a reliable supplier of petroleum products,  including Gasoline, Gasoil, Jet Fuel A1, Bitumen, Lubricants, and others as  well as shipment. The company ensures the delivery of high-quality fuels to meet the energy needs of its clients .▪ Our team is comprised of experienced and versatile professionals with significant expertise across the light, Middle, and heavy distillate.▪ For Diesel, we provide Premium quality, low sulfur automotive Diesel fuel  for high-speed diesel-powered engines, generator sets and other  industrial applications, which ensures high grade performance levels.',
  imagePath: 'Bulk-Fuel_01_image.png'
},
{
  name:'Onshore and Offshore Oil and Gas Fields and Facilities',
  descrption: 'The company offers specialized services related to onshore and offshore oil and gas fields, providing essential support to the energy sector',
  imagePath: 'P235-1-1180x640.jpg'
},
{
  name:'Goods and Shipment Services',
  descrption: ' Florya General Trading provides land shipment services, facilitating the smooth transportation of goods within the region with a commitment to reliability and efficiency. All our oil products can be exported and import in any part of the world.',
  imagePath: 'shipping-services.jpg'
},
{
  name:'Para-Pharmaceutical Products Wholesale',
  descrption: 'Florya General Trading is a trusted wholesale distributor of Para-Pharmaceutical Products, ensuring a diverse and high-quality range of healthcare solutions for  its clientele',
  imagePath: 'wholesale-pharmacy.jpg'
},
{
  name:'Wholesale of Perfume Trading',
  descrption: 'The company is a key player in the wholesale perfume trading sector, providing an extensive collection of premium fragrances sourced from reputable brands',
  imagePath: 'maxresdefault.jpg'
},
{
  name:'Services Broker',
  descrption: 'Florya General Trading acts as a reliable services broker, leveraging its experience and industry connections to connect clients with tailored solutions that meet their specific business requirements',
  imagePath: 'Customs-Brokerage.jpg'
},
{
  name:'Wholesale of Filling and Packaging Material Trading',
  descrption: 'Specializing in the supply of filling and packaging materials, Florya General Trading addresses the packaging needs of diverse industries with high-quality and innovative solutions.',
  imagePath: 'maxresdefault (1).jpg'
},
{
  name:'Wholesale of Cosmetics and Trading',
  descrption: 'Florya General Trading is a preferred partner in the wholesale trading of  cosmetics, providing a wide range of beauty and skincare products to meet the  demands of the market .',
  imagePath: 'b3c65ed2-1c85-4f8f-9bd0-b3503d592ffe.jpg'
},
{
  name:'Importing',
  descrption: 'With a focus on importing, the company brings top-quality products to the local market, ensuring a steady supply of diverse goods to meet consumer demands.',
  imagePath: 'export-2015.jpg'
}]

constructor() {
  this.service = this.services[0];
}

}
