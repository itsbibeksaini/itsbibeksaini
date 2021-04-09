export class Skill{
    
    private _TITLE! : string;
    public get TITLE() : string {
        return this._TITLE;
    }
    public set TITLE(v : string) {
        this._TITLE = v;
    }

    private _IMAGE! : string;
    public get IMAGE() : string {
        return this._IMAGE;
    }
    public set IMAGE(v : string) {
        this._IMAGE = v;
    }    
    
}