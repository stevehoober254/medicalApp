import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypatientsPage } from './mypatients.page';

const routes: Routes = [
  {
    path: '',
    component: MypatientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypatientsPageRoutingModule {}
