import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { List_Product } from '../../../../contracts/list_product';
import { MatTableDataSource } from '@angular/material/table';
import { ProductsService } from '../../../../services/common/models/products.service';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AlertifyOptions, AlertifyService, Position } from '../../../../services/admin/alertify.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent extends BaseComponent implements OnInit {

  constructor(spinner : NgxSpinnerService,private productService : ProductsService,private aleritfyService:AlertifyService) {
    super(spinner)
  }
  
  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate' , 'updatedDate'];
  dataSource : MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator : MatPaginator;

  async ngOnInit() {
    this.showSpinner(SpinnerType.Ballatom);
    const allProducts : List_Product[] = await this.productService.read(() => this.hideSpinner(SpinnerType.BallScaleMultiple),errorMessage => 
    this.aleritfyService.message({
      message:errorMessage,
      dismissOthers:true,
      position:Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Product>(allProducts);
    this.dataSource.paginator  = this.paginator;
  }
}