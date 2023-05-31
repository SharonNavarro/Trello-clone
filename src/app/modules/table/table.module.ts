import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from './table-routing.module';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from './pages/table/table.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    CdkTableModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TableModule { }
