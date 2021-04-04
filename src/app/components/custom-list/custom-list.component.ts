import { Component, Input, OnInit } from '@angular/core';
import { CustomListItem } from './models';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  @Input() customList!: CustomListItem[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
