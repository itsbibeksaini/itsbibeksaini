import { Store, StoreConfig } from "@datorama/akita";
import { CustomListState, defaultCustomListState } from "../states";

@StoreConfig({ name: 'custom-list' })
export class CustomListStore extends Store<CustomListState>{
    constructor(){
        super(defaultCustomListState())
    }
}