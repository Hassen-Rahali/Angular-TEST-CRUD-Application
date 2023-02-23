import { Component, OnInit } from '@angular/core';
import {person} from "../model/person";
import {PersonService} from "../service/person.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-form',
  templateUrl:'./ajouter-form.component.html',
  styleUrls: ['./ajouter-form.component.css']
})
export class AjouterFormComponent implements OnInit {

  person!:person;
 listperson!:person[];
  public action! : string;
  constructor(private personService:PersonService,
  private router: Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.person= new person();
    console.log(this.currentRoute.snapshot.params['id'])
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      this.action = "update";
      //update  +1 examen
      this.personService.getPersonById(id).subscribe(
        (data: person)=> this.person= data
      )
    }else
    {
      this.action = "save";
      this.person= new person();
    }

  }
  savePerson(){
    if(this.action == "save"){
      //this.productService.list.push(this.product);
      this.personService.postPerson(this.person).subscribe(
        ()=>this.router.navigate(['/consulterListe'])
      );
    }
    else{
      this.personService.updatePerson(this.person.id, this.person).subscribe(
        ()=>this.router.navigate(['/consulterListe'])
      );
    }
  }
}
