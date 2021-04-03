import { Component, OnInit } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],  
})
export class HomeComponent implements OnInit {

  faGithub = faGithub
  faLinkedin = faLinkedin
  faFacebook = faFacebook
  faInstagram = faInstagram

  isLoading: boolean = true
  constructor() {
    setTimeout(()=>{
      this.isLoading = false
    }, 2000)
  }

  ngOnInit(): void {
  }

}
