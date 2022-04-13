import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgChartsModule } from 'ng2-charts';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCommonModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogModule } from './dialog/dialog.module';


import { AppComponent } from './app.component';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './deletedialog/deletedialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DoughnutComponent,
    TableComponent,
    ListComponent,
    EditDialogComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DialogModule,
    MatCommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    NgChartsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
