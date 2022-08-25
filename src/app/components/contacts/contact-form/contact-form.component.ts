import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../models/contact';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  form: FormGroup;
  isSubmitted = false;

  constructor() {
    this.form = new FormGroup({
      firstName: new FormControl('', {validators: [Validators.required]}),
      lastName: new FormControl('', {validators: [Validators.required]}),
      phone: new FormControl('', {validators: [Validators.required]})
    });
  }

  ngOnInit() {
  }

  setFormData(contact: Contact) {
    this.form.setValue({
      firstName: contact.firstName,
      lastName: contact.lastName,      
      phone: contact.phone,
    });
  }

  isValid(): boolean {
    this.isSubmitted = true;
    return this.form.valid;
  }

  getValue(): Contact {
    return {
      ...this.form.value,
      id: ''
    };
  }

}
