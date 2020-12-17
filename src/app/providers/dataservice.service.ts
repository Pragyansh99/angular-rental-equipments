import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Location } from '../interface/model';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private _locationWiseList = [];

  private _categoryList: BehaviorSubject<any> = new BehaviorSubject([]);
  categoryList: Observable<any> = this._categoryList.asObservable();

  private _subCategoryList: BehaviorSubject<any> = new BehaviorSubject([]);
  subCategoryList: Observable<any> = this._subCategoryList.asObservable();

  subCategoryName = '';
  categoryState: Location = <Location>{};

  constructor(private http: HttpClient) { }

  fetchCategories(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/json' })
    }
    return this.http.get('../../assets/json/catalog.json').pipe(
      tap((list: any) => {
        this._locationWiseList = list.data.locations;
      })
    )
  }

  setLocationBranch(data: Location) {
    let list = [];
    let obj:any = {}
    try {
      this.categoryState = data;
      const branchIndex = this._locationWiseList.findIndex((x: any) => x.dealers_id == data.location )
      if(branchIndex != -1) {
        obj = this._locationWiseList[branchIndex]
        const categoryList = obj.branches.find((x: any) => { return x.branch_id == data.branch })
        categoryList.categories.map((x: any) => { x.image = '../../../assets/category/' + x.image });
        list = categoryList.categories
      }
    } catch (e) {
      list = [];
    }
    this._categoryList.next(list);
  }

  setSubCategoryList(data: any) {
    this.subCategoryName = data.name
    data.subcategories.map((x:any) => { x.image = '../../../assets/category/subcategory/' + x.image })
    let subCategory = data.subcategories
    this._categoryList.next(subCategory);
  }

  setPreviousCategory() {
    this.setLocationBranch(this.categoryState)
  }

}
