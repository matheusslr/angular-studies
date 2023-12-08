import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  firstName: string;
  persons: Person[];
  constructor() {
    this.firstName = "firstName";
    let example1 = new Person("lastName1", 23);
    let example2 = new Person("lastName2", 30);
  
    this.persons = [example1, example2];
  }
}

class Person {
  constructor(
    public lastName: string,
    public age: number
  ) { }
}