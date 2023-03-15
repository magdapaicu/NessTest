import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialogAddStudent/dialog.component';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConfirmDeleteComponent>,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.dialogRef.updatePosition({
      left: '35%',
    });
  }

  onCloseDialog() {
    this.dialogRef.close();
  }

  deleteClass(id: number) {
    this.dataService.removeClassId(id);
  }
}
