import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './shared/table/table.component';
import { DialogComponent } from './shared/dialogAddStudent/dialog.component';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { OccupancyComponent } from './occupancy/occupancy.component';
import { ConfirmDeleteComponent } from './shared/confirm-delete/confirm-delete.component';
import { SearchComponentComponent } from './shared/search-component/search-component.component';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DialogComponent,
    OccupancyComponent,
    ConfirmDeleteComponent,
    SearchComponentComponent,
  ],
  imports: [
    FormsModule,
    MatSnackBarModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    DragDropModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
