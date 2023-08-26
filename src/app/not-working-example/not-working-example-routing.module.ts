import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotWorkingTest2Component } from './not-working-test2/not-working-test2.component';
import { NotWorkingTest3Component } from './not-working-test3/not-working-test3.component';
import { NotWorkingTest4Component } from './not-working-test4/not-working-test4.component';
import { NotWorkingTestComponent } from './not-working-test/not-working-test.component';
import { NotWorkingExampleComponent } from './not-working-example.component';

const routes: Routes = [
  {
    path: '',
    component: NotWorkingExampleComponent,
    children: [
      {
        path: '',
        redirectTo: 'test',
        pathMatch: 'full'
      },
      {
        path: 'test',
        component: NotWorkingTestComponent,
      },
      {
        path: 'test2',
        component: NotWorkingTest2Component,
      },
      {
        path: 'test3',
        component: NotWorkingTest3Component,
      },
      {
        path: 'test4',
        component: NotWorkingTest4Component,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotWorkingExampleRoutingModule { }
