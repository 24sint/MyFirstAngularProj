import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  getPerson(){
    return ["App Cust", "Cat Jack", "Ali Erik", "Bill Eva", "Max Born", "Sarah Boysen", "Niels Bohr"];
    
  }
  
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms));
}
}
