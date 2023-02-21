import { Component } from '@angular/core';
import { Contact } from './models/contacts';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts: Contact[] = [];
  contactToEdit?: Contact;
  
  constructor(private contactService: ContactService) {}

  initNewContact() {
    this.contactToEdit = new Contact();
  }

  editContact(contact: Contact) {
    this.contactToEdit = contact;
  }

  updateContactList(contacts: Contact[]) {
    this.contacts = contacts;
  }

  ngOnInit() : void {
    this.contactService.getContacts().subscribe((result: Contact[]) => (this.contacts = result));
  }
}
