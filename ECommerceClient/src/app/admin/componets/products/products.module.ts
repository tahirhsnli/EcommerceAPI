import { Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DeleteDirective } from '../../../directives/admin/delete.directive';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ReadComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    MatSidenavModule, MatFormFieldModule, MatInputModule, MatButtonModule,
    RouterModule.forChild([
      { path:"",component:ProductsComponent }
    ]),
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ProductsModule { }
