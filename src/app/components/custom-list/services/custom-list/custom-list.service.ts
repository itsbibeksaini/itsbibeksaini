import { Injectable } from '@angular/core';
import { CustomListStore } from 'src/app/stores';

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
}
