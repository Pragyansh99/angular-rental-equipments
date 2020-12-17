import { Component } from '@angular/core';
import { DataserviceService } from './providers/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rental-department';

  constructor(private dataService : DataserviceService) { }

  ngOnInit() { }

}
