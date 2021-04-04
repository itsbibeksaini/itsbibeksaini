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
}