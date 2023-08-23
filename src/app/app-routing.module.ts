import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'test',
        component: TestComponent,
        pathMatch: 'full'
      },
      {
        path: 'test2',
        component: Test2Component,
        pathMatch: 'full'
      },
      {
        path: 'test3',
        component: Test3Component,
        pathMatch: 'full'
      },
      {
        path: 'test4',
        component: Test4Component,
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
