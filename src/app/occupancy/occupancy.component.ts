import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IClass } from '../interfaces/IClass';

@Component({
  selector: 'app-occupancy',
  templateUrl: './occupancy.component.html',
  styleUrls: ['./occupancy.component.css'],
})
export class OccupancyComponent implements OnInit {
  constructor(private data: DataService) {}

  @Input() maxNoOfStudents: number;
  @Input() existsStudents: number;
  classes: IClass[] = [];

  getPercentage(maxNoOfStudents: number, existsStudents: number) {
    return Math.floor((existsStudents / maxNoOfStudents) * 100);
  }

  ngOnInit(): void {
    this.classes = this.data.getClasses();
  }
  get occupancy(): number {
    return this.getPercentage(this.maxNoOfStudents, this.existsStudents);
  }

  getColorClass(occupancy: number) {
    if (occupancy < 25) {
      return 'bg-success';
    } else if (occupancy >= 25 && occupancy < 75) {
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }
}
