import { Component, OnInit, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { DataserviceService } from '../../providers/dataservice.service';
import { tap, map, isEmpty } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, AfterViewChecked {
  categorie: any;
  showWelcomePage:any = true;
  is_category_section = true;
  constructor( public dataService: DataserviceService,
            private router: Router,
            ) { }

  ngOnInit(): void {
    this.categorie  = this.dataService.categoryList
    .pipe(
      tap(list => {
        this.showWelcomePage = (list.length == 0)
        this.is_category_section = true;
      })
    )
   }

  ngAfterViewChecked(): void {

  }

  routeToSubCategory(event:any) {
    if (this.is_category_section) {
      this.dataService.setSubCategoryList(event);
      this.is_category_section = false;
      // this.router.navigate(['/subcategory'])
    }
  }

  switchToCategorySection() {
    this.is_category_section = true;
    this.dataService.setPreviousCategory();
  }

}
