import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {person} from "../model/person";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) {
  }

  personUrl: string = 'api/person/'
  public list!: person[];

  getPerson() {
    return this.httpClient.get<person[]>(this.personUrl)
  }

  postPerson(s: person) {
    return this.httpClient.post(this.personUrl, s);
  }

  deletePerson(id: number) {
    return this.httpClient.delete(this.personUrl + id)
  }
  updatePerson(id:number,s:person){
    return this.httpClient.put(this.personUrl+id,s)
  }
  getPersonById(id:number){
    return this.httpClient.get<person>(this.personUrl+id)
  }

}
