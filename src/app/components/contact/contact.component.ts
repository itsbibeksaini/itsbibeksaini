import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faMobileAlt = faMobileAlt
  faEnvelope = faEnvelope
  constructor() { }

  ngOnInit(): void {
  }

  sendMail(){
    window.location.href = "mailto:itsbibeksaini@gmail.com";
  }

}
