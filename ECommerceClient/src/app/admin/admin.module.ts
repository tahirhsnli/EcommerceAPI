import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponetsModule } from './componets/componets.module';





@NgModule({
  declarations: [
  
   
  ],
  imports: [
    CommonModule,
   
    LayoutModule,
    ComponetsModule,
  
   
  ],
  exports: [
    LayoutModule
  ]
})
export class AdminModule { }
