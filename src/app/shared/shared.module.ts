import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  exports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
  ]
})
export class SharedModule { }
