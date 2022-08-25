import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {Router} from '@angular/router';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  @ViewChild(ContactFormComponent)
  contactForm!: ContactFormComponent;

  constructor(private router: Router, private contactService: ContactService) {
  }

  ngOnInit() {
  }

  onBtnAddClick() {
    if (this.contactForm.isValid()) {
      console.log(this.contactForm.getValue());
      this.contactService.contacts.push(this.contactForm.getValue());
      console.log(this.contactService.contacts);
      this.router.navigate(['/']);
    }
  }

  onBtnCancelClick() {
    this.router.navigate(['/']);
  }

}
