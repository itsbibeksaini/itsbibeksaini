import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { CustomListState, defaultCustomListState } from "./custom-list-state";


@Injectable({
    providedIn: 'root',
})
@StoreConfig({ name: 'custom-list' })
export class CustomListStore extends Store<CustomListState>{
    constructor(){
        super(defaultCustomListState())
    }

    selectItem(id:string){
        this.unselectItem(id)

        this.update(state => {
            let item = state.ITEMS.find(x => x.ID === id)

            if(item !== undefined)
                item.IS_SELECTED = true
        })
    }

    private unselectItem(id: string){
        this.update(state => {
            let selectedItem = state.ITEMS.find(x=> x.ID === id)

            if(selectedItem !== undefined)
                selectedItem.IS_SELECTED = false
        })
    }

    unselectAll(){
        this.update(state =>{
            let selectedItem = state.ITEMS.find(x=>x.IS_SELECTED)
            if(selectedItem !== undefined)
                selectedItem.IS_SELECTED = false
        })
    }
}