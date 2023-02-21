import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // API URL
  private url = "Contact";

  constructor(private http: HttpClient) { }

  // Returns an array of contacts
  public getContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>(`${environment.apiUrl}/${this.url}`);
  }

  // Updates the contact
  public updateContact(contact: Contact): Observable<Contact[]> {

    return this.http.put<Contact[]>(`${environment.apiUrl}/${this.url}`, contact);
  }

  // Creates a new contact
  public createContact(contact: Contact): Observable<Contact[]> {

    return this.http.post<Contact[]>(`${environment.apiUrl}/${this.url}`, contact);
  }

  // Deletes the contact based on the id
  public deleteContact(contact: Contact): Observable<Contact[]> {

    return this.http.post<Contact[]>(`${environment.apiUrl}/${this.url}`, contact.id);
  }
}
