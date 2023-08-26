import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkingTest2Component } from './working-test2/working-test2.component';
import { WorkingTest3Component } from './working-test3/working-test3.component';
import { WorkingTest4Component } from './working-test4/working-test4.component';
import { WorkingTestComponent } from './working-test/working-test.component';
import { WorkingExampleComponent } from './working-example.component';

const routes: Routes = [
  {
    path: '',
    component: WorkingExampleComponent,
    children: [
      {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full'
      },
      {
        path: 'test',
        component: WorkingTestComponent,
      },
      {
        path: 'test2',
        component: WorkingTest2Component,
      },
      {
        path: 'test3',
        component: WorkingTest3Component,
      },
      {
        path: 'test4',
        component: WorkingTest4Component,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingExampleRoutingModule { }
