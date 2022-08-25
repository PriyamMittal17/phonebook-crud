import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];
  dataByEvent: EventEmitter<Contact[]> = new EventEmitter<Contact[]>();


  constructor(private http: HttpClient) {
  }

  retrieveContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts');
  }

  sendDataByEvent(data: Contact[]) {
    this.dataByEvent.emit(data);
  }
}
