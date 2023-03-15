import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IClass } from './interfaces/IClass';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ness';
  classes: IClass[] = [];

  newClass: IClass = {
    id: 3,
    name: 'Web',
    teacher: 'Alice',
    maxNoOfStudents: 20,
    students: [{ name: 'Maria' }, { name: 'Ana' }, { name: 'Damaris' }],
  };

  classUpdate: IClass = {
    id: 4,
    name: 'Web',
    teacher: 'Alice',
    maxNoOfStudents: 18,
    students: [{ name: 'Maria' }, { name: 'Ana' }, { name: 'Damaris' }],
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.classes = this.dataService.getClasses();
    // console.log(this.classes);
    this.dataService.addClass(this.newClass);
    this.classes = this.dataService.getClasses();
    // console.log(this.classes);
    // this.dataService.removeClass(this.newClass);
    // console.log(this.classes);
    this.dataService.updateClass(this.classUpdate);
    // console.log(this.classes);
  }
}
function output() {
  throw new Error('Function not implemented.');
}
