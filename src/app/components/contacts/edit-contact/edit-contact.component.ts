import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../../services/contact.service';
import {Contact} from '../../../models/contact';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {ContactsComponent} from '../contacts.component';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contactId = '';
  contact: Contact[] = [];
  @ViewChild(ContactFormComponent)
  contactForm!: ContactFormComponent;
  contactsComponent!: ContactsComponent;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private contactService: ContactService) {

  }

  ngOnInit() {
    // this.getData();
    this.contactId = this.activatedRoute.snapshot.params['id'];
    console.log(this.contactId);
    this.getContactById(this.contactId);
  }

  // getData() {
  //   this.contactService.dataByEvent.subscribe(response => {
  //     let contacts = response;
  //     console.log(contacts);
  //   });
  // }

  getContactById(id: string) {
    console.log(this.contactsComponent.contacts);
    let contact =  this.contactService.contacts.find((i) => {
      id === i.id;
    });
    console.log(contact);
    if (contact) {
      this.contactForm.setFormData(contact);
    }
  }

  onBtnEditClick() {
    if (this.contactForm.isValid()) {
      let contact = this.contactService.contacts.find(i => {
        this.contactId === i.id
      })
      contact = this.contactForm.getValue();
      this.router.navigate(['/']);
    }
  }

  onBtnCancelClick() {
    this.router.navigate(['/']);
  }
}
