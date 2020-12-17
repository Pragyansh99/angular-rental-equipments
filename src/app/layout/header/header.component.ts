import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../providers/dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  dropdownItems: any = [];

  constructor(private dataService: DataserviceService) { }

  ngOnInit(): void {
    this.dataService.fetchCategories().subscribe(response => {
      this.dropdownItems = response.data.locations
    }, (error) => {
      this.dropdownItems = [];
    })
  }

  emitSelection(location: string, branch: string = '') {
    const data = {
      location,
      branch
    }
    this.dataService.setLocationBranch(data);
  }

}
