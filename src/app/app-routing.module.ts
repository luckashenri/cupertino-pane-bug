import { NotWorkingExampleModule } from './not-working-example/not-working-example.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'working',
    loadChildren: () => import('./working-example/working-example.module').then((m) => m.WorkingExampleModule),
  },
  {
    path: 'not-working',
    loadChildren: () => import('./not-working-example/not-working-example.module').then((m) => m.NotWorkingExampleModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'working'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
