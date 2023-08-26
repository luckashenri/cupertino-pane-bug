import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkingExampleComponent } from './working-example.component';
import { WorkingExampleRoutingModule } from './working-example-routing.module';

@NgModule({
  declarations: [
    WorkingExampleComponent,
  ],
  imports: [
    CommonModule,
    WorkingExampleRoutingModule
  ]
})
export class WorkingExampleModule { }
