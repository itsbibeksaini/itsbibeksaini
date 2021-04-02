import { Component, OnInit } from '@angular/core';
import { faCogs, faFilePdf, faLaptopCode, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

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
  constructor() { }

  ngOnInit(): void {
  }

}
