import { Injectable } from '@angular/core';
import { CustomListItem } from '../../models';
import { CustomListStore } from '../../state/custom-list-store';


@Injectable({
  providedIn: 'root'
})
export class CustomListService {

  constructor(private customListStore: CustomListStore) { }

  selectItem(id:string){
    this.customListStore.selectItem(id)
  }

  unselectAll(){
    this.customListStore.unselectAll()
  }

  addItems(items:CustomListItem[]){
  this.customListStore.update(() => {
      return{
        ITEMS: items
      }
    })
  }
}
