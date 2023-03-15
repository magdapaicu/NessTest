import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {}

  @Output() closeDialog = new EventEmitter();
  newStudent = '';

  ngOnInit(): void {
    this.dialogRef.updatePosition({
      left: '40%',
      top: '-15%',
    });
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  addStudent() {
    this.dataService.addStudent(this.data.id, this.newStudent);
    // console.log(this.data.id);
    this.dialogRef.close();
    // console.log(this.newStudent);
    // console.log(this.dataService.getClasses());
  }
}
