import { Component, OnInit } from '@angular/core';
import { faAddressCard, faCogs, faFilePdf, faHome, faIdBadge, faLaptopCode, faLaptopHouse, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faLaptopHouse = faLaptopHouse
  faLaptopCode = faLaptopCode
  faCogs = faCogs
  faFilePdf = faFilePdf
  faProjectDiagram = faProjectDiagram
  faHome = faHome
  faAddressCard = faAddressCard
  constructor() { }

  ngOnInit(): void {
  }

}
