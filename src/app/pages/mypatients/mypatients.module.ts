import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MypatientsPageRoutingModule } from './mypatients-routing.module';

import { MypatientsPage } from './mypatients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypatientsPageRoutingModule
  ],
  declarations: [MypatientsPage]
})
export class MypatientsPageModule {}
