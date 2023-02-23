import { Component, OnInit } from '@angular/core';
import { person } from "../model/person";
import { PersonService } from "../service/person.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  search: string = "";
  person!: person;
  listperson!: person[];
  filteredPersons!: person[];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.person = new person();
    this.personService.getPerson().subscribe(
      (data: person[]) => {
        this.listperson = data;
        this.filteredPersons = data.filter(person =>
          person.first_name.toLowerCase().includes(this.search.toLowerCase())
          || person.last_name.toLowerCase().includes(this.search.toLowerCase())
          || person.email_address.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    );
  }

  delete(person: person) {
    this.personService.deletePerson(person.id).subscribe(
      () => {
        let i = this.listperson.indexOf(person);
        this.listperson.splice(i, 1);
        this.filteredPersons = this.listperson.filter(person =>
          person.first_name.toLowerCase().includes(this.search.toLowerCase())
          || person.last_name.toLowerCase().includes(this.search.toLowerCase())
          || person.email_address.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    );
  }

  onSearch() {
    this.filteredPersons = this.listperson.filter(person =>
      person.first_name.toLowerCase().includes(this.search.toLowerCase())
      || person.last_name.toLowerCase().includes(this.search.toLowerCase())
      || person.email_address.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}