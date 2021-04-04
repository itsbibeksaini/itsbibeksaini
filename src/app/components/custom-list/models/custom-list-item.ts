export class CustomListItem{
    
    private _ID! : string;
    public get ID() : string {
        return this._ID;
    }
    public set ID(v : string) {
        this._ID = v;
    }
    
    private _TITLE! : string;
    public get TITLE() : string {
        return this._TITLE;
    }
    public set TITLE(v : string) {
        this._TITLE = v;
    }
    
    private _SUB_TITLE! : string;
    public get SUB_TITLE() : string {
        return this._SUB_TITLE;
    }
    public set SUB_TITLE(v : string) {
        this._SUB_TITLE = v;
    }

    private _IS_SELECTED! : boolean;
    public get IS_SELECTED() : boolean {
        return this._IS_SELECTED;
    }
    public set IS_SELECTED(v : boolean) {
        this._IS_SELECTED = v;
    }
        
}