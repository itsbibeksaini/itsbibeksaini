import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { CustomListState } from "./custom-list-state";
import { CustomListStore } from "./custom-list-store";


@Injectable({
    providedIn: 'root',
})
export class CustomListQuery extends Query<CustomListState>{
    constructor(protected customListStore: CustomListStore){
        super(customListStore)
    }
}