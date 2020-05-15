import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {

  constructor(private webService: WebService) { }

  getContacts(){
    return this.webService.getAll('')
  }

  getContact(id: string){
    return this.webService.getOne('contacts/' + id);
  }

  createContact(contact: object) {
    return this.webService.post('contacts', contact);
  }

  updateContact(id: string, contact: object) {
    return this.webService.put(`contacts/${id}`, contact);
  }

  deleteContact(id: any) {
    return this.webService.delete(`contacts/${id}`);
  }

}
