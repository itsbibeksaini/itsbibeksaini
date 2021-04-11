export class Project{
    
    private _TITLE! : string;
    public get TITLE() : string {
        return this._TITLE;
    }
    public set TITLE(v : string) {
        this._TITLE = v;
    }
    
    private _SUBTITLE! : string;
    public get SUBTITLE() : string {
        return this._SUBTITLE;
    }
    public set SUBTITLE(v : string) {
        this._SUBTITLE = v;
    }
    
    private _DESCRIPTION! : string;
    public get DESCRIPTION() : string {
        return this._DESCRIPTION;
    }
    public set DESCRIPTION(v : string) {
        this._DESCRIPTION = v;
    }    
}