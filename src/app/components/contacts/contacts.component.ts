import {Component, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  newContacts: Contact[] = [];

  columns = ['name', 'email', 'number', 'tags', 'actions'];

  constructor(private contactService: ContactService, private router: Router) {
  }

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService.retrieveContacts()
      .subscribe(result => {
        this.contacts = result;
        this.newContacts = [...this.contacts, ...this.contactService.contacts];
        console.log(this.contacts);
      }, error => {
        console.log('Http error => ', error);
      });
      this.sendNewData(this.newContacts);
  }

  sendNewData(data: Contact[]) {
    this.contactService.sendDataByEvent(data);
  }

  onEditContactClick(contact: Contact) {
    console.log(contact);
    this.router.navigate(['/contacts', contact.id, 'edit']);
  }

  onDeleteContactClick(contact: Contact) {
    console.log(contact);
    this.newContacts.splice(this.newContacts.indexOf(contact), 1);    
  }

}
