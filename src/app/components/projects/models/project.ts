export class Project{
    
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
    
    
    private _DESCRIPTION! : string;
    public get DESCRIPTION() : string {
        return this._DESCRIPTION;
    }
    public set DESCRIPTION(v : string) {
        this._DESCRIPTION = v;
    }
    
    private _SELECTED! : boolean;
    public get SELECTED() : boolean {
        return this._SELECTED;
    }
    public set SELECTED(v : boolean) {
        this._SELECTED = v;
    }
    
    private _ARCHIEVED! : boolean;
    public get ARCHIEVED() : boolean {
        return this._ARCHIEVED;
    }
    public set ARCHIEVED(v : boolean) {
        this._ARCHIEVED = v;
    }
    
        
}