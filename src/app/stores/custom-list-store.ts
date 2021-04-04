import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { CustomListState, defaultCustomListState } from "../states";

@Injectable({
    providedIn: 'root',
})
@StoreConfig({ name: 'custom-list' })
export class CustomListStore extends Store<CustomListState>{
    constructor(){
        super(defaultCustomListState())
    }
}