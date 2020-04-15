import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { PersonService } from '../person.service';
import { transition, animate, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  animations: [
    trigger('brightDim', [
      state('bright', style({
        height: '150px',
        width: '100%',
        opacity: 1,
        backgroundColor: 'red'
      })),
      state('dim', style({
        height: '100px',
        width: '50%',
        opacity: .4,
        backgroundColor: 'gray'
      })),
      transition('bright => dim', [
        animate('0.8s ease')
      ]),
      transition('dim => bright', [
        animate('0.8s ease')
      ])
    ])
  ]
})

export class UserFormComponent implements OnInit {
  model = new User();
  responseMessage="Creation ";
  isBright = true;

  toggle() {
    this.isBright = !this.isBright;
  }

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.personService.postUserWeb(this.model).subscribe((response)=>{
      this.responseMessage = response.result;
    });
  }
  get currentMessage(){return this.responseMessage};

  get diagnostic(){return JSON.stringify(this.model)};
}
