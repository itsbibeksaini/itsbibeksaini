import { CustomListItem } from "../models";

export interface CustomListState{
    ITEMS: CustomListItem[]
}

export function defaultCustomListState(): CustomListState{
    return {
        ITEMS: []
    }
}