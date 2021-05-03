import { Component, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { faAddressBook, faAddressCard, faCogs, faFilePdf, faHome, faIdBadge, faLaptopCode, faLaptopHouse, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { ThemeSwitcherService } from 'src/app/services';

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
  faAddressBook = faAddressBook

  switchState: boolean = false
  constructor(private themeSwitcher: ThemeSwitcherService) {
    this.switchState = themeSwitcher.getCurrentTheme() != null && themeSwitcher.getCurrentTheme() === ThemeSwitcherService.THEME_DARK
  }

  ngOnInit(): void {
  }

  switchTheme(evt: MatSlideToggleChange){    
    this.switchState = evt.checked
    this.themeSwitcher.switchTheme(evt.checked)
  }

}
