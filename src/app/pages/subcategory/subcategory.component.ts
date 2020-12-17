import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../../providers/dataservice.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  subCategoryList: any;

  constructor( public dataService: DataserviceService,
    private router: Router) { }

  ngOnInit(): void {
  this.subCategoryList = this.dataService.subCategoryList
  }

  gotoCategoryPage() {
    this.dataService.subCategoryName = '';
    this.router.navigate(['/homepage'])
  }

}
