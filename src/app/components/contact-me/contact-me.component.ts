import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { faEnvelope, faEnvelopeOpenText, faUser } from '@fortawesome/free-solid-svg-icons';
import { ValidateOnValueChange } from 'src/app/validators';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  faUser = faUser
  faEnvelope = faEnvelope
  faEnvelopeOpenText = faEnvelopeOpenText

  contactMeFrom: FormGroup
  showContactMeErrors:boolean = false
  isSendMessageAttempt:boolean = false;

  validationMessages = {
    'FIRST_NAME': {
      'required': 'You must enter data in first name',      
    },    
    'LAST_NAME':{
      'required': 'You must enter data in last name',      
    },
    'EMAIL':{
      'required': 'You must enter data in email',
      'email': 'You have entered email in incorrect format'      
    },    
    'MESSAGE':{
      'required': 'You must enter data in message',      
    }
  };

  contactMeFormErrors = {
    'FIRST_NAME': this.validationMessages['FIRST_NAME']['required'],
    'LAST_NAME': this.validationMessages['LAST_NAME']['required'],
    'EMAIL': this.validationMessages['EMAIL']['required'],
    'MESSAGE': this.validationMessages['MESSAGE']['required']
  }

  constructor(private formBuilder:FormBuilder) {
    this.contactMeFrom = this.createContactMeForm()
    this.contactMeFrom.valueChanges.subscribe(data => {
      ValidateOnValueChange(this.contactMeFrom, this.contactMeFormErrors, this.validationMessages, data);
    });
  }

  createContactMeForm(): FormGroup{
    return this.formBuilder.group({
      'FIRST_NAME': new FormControl("" ,[Validators.required]),
      "LAST_NAME": new FormControl("", [Validators.required]),
      "EMAIL": new FormControl("", [Validators.required, Validators.email]),
      "MESSAGE": new FormControl("", [Validators.required])
    })
  }

  get FIRST_NAME(){
    return this.contactMeFrom.get("FIRST_NAME")
  }

  get LAST_NAME(){
    return this.contactMeFrom.get("LAST_NAME")
  }

  get EMAIL(){
    return this.contactMeFrom.get("EMAIL")
  }

  get MESSAGE(){
    return this.contactMeFrom.get("MESSAGE")
  }

  ngOnInit(): void {
  }

  sendMessage(){
    this.isSendMessageAttempt = true;
    if(this.contactMeFrom.valid){
      
    }
  }

}
