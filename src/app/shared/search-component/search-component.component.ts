import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { DataService } from 'src/app/data.service';
import { IClass } from 'src/app/interfaces/IClass';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
})
export class SearchComponentComponent implements OnInit {
  constructor(private data: DataService) {}

  classes: IClass[] = [];
  class: IClass;
  className = '';
  teacherName = '';
  @ViewChild('inputRef') inputRef: ElementRef;
  @Output() search = new EventEmitter<{
    className: string;
    teacherName: string;
  }>();

  ngOnInit() {
    this.classes = this.data.getClasses();
  }

  filterClasses() {
    this.classes = this.classes.filter((classes) => {
      return (
        classes.name.includes(this.className) &&
        classes.teacher.includes(this.teacherName)
      );
    });
    this.search.emit({
      className: this.className,
      teacherName: this.teacherName,
    });
    console.log(this.search);
    console.log(this.classes);
  }
}
