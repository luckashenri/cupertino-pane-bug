import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotWorkingExampleComponent } from './not-working-example.component';
import { NotWorkingExampleRoutingModule } from './not-working-example-routing.module';

@NgModule({
  declarations: [
    NotWorkingExampleComponent,
  ],
  imports: [
    CommonModule,
    NotWorkingExampleRoutingModule
  ]
})
export class NotWorkingExampleModule { }
