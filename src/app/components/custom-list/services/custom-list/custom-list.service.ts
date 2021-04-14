import { Injectable } from '@angular/core';
import { PROJECT_LIST } from 'src/app/data/projects/project-list';
import { CustomListItem } from '../../models';
import { CustomListStore } from '../../state/custom-list-store';


@Injectable({
  providedIn: 'root'
})
export class CustomListService {

  constructor(private customListStore: CustomListStore) { 
    this.addItems()
  }

  selectItem(id:string){
    this.customListStore.selectItem(id)
  }

  unselectAll(){
    this.customListStore.unselectAll()
  }

  addItems(){
  this.customListStore.update(() => {
      return{
        ITEMS: PROJECT_LIST
      }
    })
  }
}
