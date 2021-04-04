import { CustomListItem } from "../components/custom-list/models";

export interface CustomListState{
    ITEMS: CustomListItem[]
}

export function defaultCustomListState(): CustomListState{
    return {
        ITEMS: []
    }
}