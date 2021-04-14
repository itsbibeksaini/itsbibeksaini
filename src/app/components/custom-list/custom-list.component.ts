import { Component, Input, OnInit } from '@angular/core';
import { CustomListQuery } from 'src/app/queries';
import { CustomListItem } from './models';

@Component({
  selector: 'custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  customList!: CustomListItem[]
  constructor(private customListQuery:CustomListQuery) {
    customListQuery.select(state => state.ITEMS).subscribe(res =>{      
      this.customList = res
    })
  }

  ngOnInit(): void {
  }

}
