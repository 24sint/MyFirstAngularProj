import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  pepLists: string[];
  constructor(private personService: PersonService ) {}

  ngOnInit(): void {
    this.pepLists = this.personService.getPerson();
    
  }

}
