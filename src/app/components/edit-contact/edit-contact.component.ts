import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contacts';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent {
  @Input() contact?: Contact
  @Output() contactUpdated = new EventEmitter<Contact[]>();

  constructor(private contactService: ContactService) {}

  // Calls service to update the contact
  updateContact(contact: Contact) {
    this.contactService.updateContact(contact)
    .subscribe((contacts: Contact[]) => this.contactUpdated.emit(contacts));
  }

  // Calls service to create a contact
  createContact(contact: Contact) {
    this.contactService.createContact(contact)
    .subscribe((contacts: Contact[]) => this.contactUpdated.emit(contacts));
  }

  // Calls service to delete the contact
  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact)
    .subscribe((contacts: Contact[]) => this.contactUpdated.emit(contacts));
  }
}
