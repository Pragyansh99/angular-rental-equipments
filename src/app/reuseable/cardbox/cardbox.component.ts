import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cardbox',
  templateUrl: './cardbox.component.html',
  styleUrls: ['./cardbox.component.scss']
})
export class CardboxComponent implements OnInit {
  @Input() cardItem:any;
  @Input() imageUrl:any;

  @Output() selectedSubCategory = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  selectedTile() {
    const data = this.cardItem;
    this.selectedSubCategory.emit(data);
  }

}
