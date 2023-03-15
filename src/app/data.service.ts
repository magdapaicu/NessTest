import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IClass } from './interfaces/IClass';
import { IStudent } from './interfaces/IStudent';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  classesUpdated = new Subject<IClass[]>();

  classes: IClass[] = [
    {
      id: 0,
      name: 'Graphics',
      teacher: 'Kyle',
      maxNoOfStudents: 10,
      students: [{ name: 'John' }, { name: 'Beth' }, { name: 'Mike' }],
    },
    {
      id: 0,
      name: 'Graphics',
      teacher: 'Ana',
      maxNoOfStudents: 10,
      students: [{ name: 'John' }, { name: 'Beth' }, { name: 'Mike' }],
    },
    {
      id: 1,
      name: 'Mechatronics',
      teacher: 'Allen',
      maxNoOfStudents: 15,
      students: [
        { name: 'Stewie' },
        { name: 'Chris' },
        { name: 'Peter' },
        { name: 'Brian' },
      ],
    },
    {
      id: 2,
      name: 'Robotics',
      teacher: 'Anna',
      maxNoOfStudents: 30,
      students: [
        { name: 'Andrew' },
        { name: 'Leia' },
        { name: 'Maya' },
        { name: 'Anna' },
        { name: 'Mari' },
        { name: 'Stewie' },
        { name: 'Chris' },
        { name: 'Peter' },
        { name: 'Brian' },
        { name: 'John' },
        { name: 'Beth' },
        { name: 'Mike' },
      ],
    },
    {
      id: 2,
      name: 'EGIOC',
      teacher: 'Paul',
      maxNoOfStudents: 28,
      students: [
        { name: 'Andrew' },
        { name: 'Leia' },
        { name: 'Maya' },
        { name: 'Anna' },
        { name: 'Mari' },
        { name: 'Andrei' },
        { name: 'Lela' },
        { name: 'Viorica' },
        { name: 'Natalia' },
        { name: 'Vasilica' },
      ],
    },
    {
      id: 2,
      name: 'POO',
      teacher: 'Sylvie',
      maxNoOfStudents: 12,
      students: [
        { name: 'Andrew' },
        { name: 'Leia' },
        { name: 'Maya' },
        { name: 'Anna' },
        { name: 'Mari' },
        { name: 'Stewie' },
        { name: 'Chris' },
        { name: 'Peter' },
        { name: 'Brian' },
        { name: 'John' },
        { name: 'Beth' },
        { name: 'Mike' },
      ],
    },
  ];

  getClasses() {
    return this.classes;
  }

  addClass(newClass: IClass) {
    newClass.id = this.generateNewId();
    this.classes.push(newClass);
  }

  removeClass(classRemove: IClass) {
    const index = this.classes.indexOf(classRemove);
    if (index !== -1) {
      this.classes.splice(index, 1);
    }
  }

  updateClass(classUpdate: IClass) {
    const index = this.classes.findIndex((x) => x.name === classUpdate.name);
    if (index !== -1) {
      this.classes[index] = classUpdate;
    }
  }
  private generateNewId(): number {
    const ids = this.classes.map((c) => c.id);
    return ids.length > 0 ? Math.max(...ids) + 1 : 1;
  }
  removeClassId(id: number) {
    const index = this.classes.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.classes.splice(index, 1);
      this.classesUpdated.next(this.classes.slice(index, 1));
    }
  }

  addStudent(id: number, newStudent: string) {
    const index = this.classes.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.classes[index].students.push({ name: newStudent });
    }
  }
}
