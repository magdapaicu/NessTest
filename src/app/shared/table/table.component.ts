import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IClass } from 'src/app/interfaces/IClass';
import { Data } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialogAddStudent/dialog.component';
import { OccupancyComponent } from 'src/app/occupancy/occupancy.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private dataService: DataService, private matDialog: MatDialog) {}

  classes: IClass[] = [];
  isOpen = false;
  @Input() dataSource: MatTableDataSource<IClass> =
    new MatTableDataSource<IClass>([]);
  @Output() filterClasses = new EventEmitter<IClass[]>();
  Subscription: Subscription;
  displayColumns: string[] = [
    'number',
    'className',
    'teacherName',
    'classOccupancy',
    'options',
  ];

  ngOnInit() {
    this.dataSource.data = this.dataService.getClasses();
    this.classes = this.dataService.getClasses();
    this.Subscription = this.dataService.classesUpdated.subscribe(() => {
      this.dataSource.data = this.classes;
    });
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

  openAddDialog(id: number) {
    if (this.isOpen) {
      return;
    }
    const dialogOpen = this.matDialog.open(DialogComponent, {
      height: '300px',
      width: '400px',
      data: { id },
    });
    this.isOpen = true;

    dialogOpen.afterClosed().subscribe(() => {
      dialogOpen.close();
      this.isOpen = false;
    });
  }

  openDeleteDialog(id: string) {
    if (this.isOpen) {
      return;
    }
    const dialogOpen = this.matDialog.open(ConfirmDeleteComponent, {
      height: '200px',
      width: '400px',
      data: {},
    });
    this.isOpen = true;

    dialogOpen.afterClosed().subscribe(() => {
      dialogOpen.close();
      this.isOpen = false;
    });
  }

  isButtonDisabled(): boolean {
    return true;
  }
  getPercentage(existStudents: number, maxNoOfStudents: number) {
    return Math.floor((existStudents / maxNoOfStudents) * 100);
  }
  deleteClass(id: number) {
    this.dataService.removeClassId(id);
  }

  isFull(existStudents: number, maxNoOfStudents: number) {
    if (existStudents === maxNoOfStudents) {
      return true;
    } else return false;
  }

  onSearch(event: { className: string; teacherName: string }) {
    this.classes = this.dataService.getClasses().filter((classItem: IClass) => {
      return (
        classItem.name.includes(event.className) &&
        classItem.teacher.includes(event.teacherName)
      );
    });
    this.filterClasses.emit(this.classes);
    this.dataSource.data = this.classes;
    // console.log(event);
    // console.log('Datele dupa filtrare sunt:');
    // console.log(this.classes);
  }
}
