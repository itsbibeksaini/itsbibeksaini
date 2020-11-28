import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faCogs, faHome, faLaptopCode, faLaptopHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faHome = faHome
  faLaptopHouse = faLaptopHouse
  faAddressCard = faAddressCard
  faLaptopCode = faLaptopCode
  faCogs = faCogs
}
