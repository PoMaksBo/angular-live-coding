import {Injectable} from '@angular/core';
import {CLIENTS} from '../data/clients';
import {filter, map, Observable, of} from 'rxjs';
import {CONTACTS} from '../data/contacts';
import {Contact} from '../interfaces/contacts';
import {Account} from '../interfaces/accounts';
import {ACCOUNTS} from '../data/accounts';
import {Client} from '../interfaces/clients';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() {}

  list(): Observable<Client[]> {
    return of(CLIENTS);
  }

  getContact(clientId: string): Observable<Contact> {
    return of(CONTACTS).pipe(
      map(contacts => contacts.find(({userId}) => userId === clientId)),
      filter((contact): contact is Contact => !!contact)
    );
  }

  getAccounts(clientIds: string[]): Observable<Account[]> {
    return of(ACCOUNTS).pipe(
      map(accounts => accounts.filter(({userId}) => clientIds.includes(userId)))
    );
  }


}
