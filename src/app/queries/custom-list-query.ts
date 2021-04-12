import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { CustomListState } from "../states";
import { CustomListStore } from "../stores";

@Injectable({
    providedIn: 'root',
})
export class CustomListQuery extends Query<CustomListState>{
    constructor(protected customListStore: CustomListStore){
        super(customListStore)
    }

    public selectItem(id: string){

        this.unselectItem();
        
        this.select(state => {
            let clickedItem = state.ITEMS.find(x => x.ID === id)
            if(clickedItem !== undefined){
                clickedItem.IS_SELECTED = true                
            }
                
        }).subscribe().unsubscribe()
    }

    public unselectItem(){
        this.select(state => {
            let selectedItem = state.ITEMS.find(x => x.IS_SELECTED)

            if(selectedItem !== undefined)
                selectedItem.IS_SELECTED = false;
        }).subscribe().unsubscribe()
    }
}