export class GalleryImage{
    
    private _IMAGE! : string;
    public get IMAGE() : string {
        return this._IMAGE;
    }
    public set IMAGE(v : string) {
        this._IMAGE = v;
    }
    
    private _PLACEHOLDER! : string;
    public get PLACEHOLDER() : string {
        return this._PLACEHOLDER;
    }
    public set PLACEHOLDER(v : string) {
        this._PLACEHOLDER = v;
    }

    private _PLACEHOLDER_COLOR! : string;
    public get PLACEHOLDER_COLOR() : string {
        return this._PLACEHOLDER_COLOR;
    }
    public set PLACEHOLDER_COLOR(v : string) {
        this._PLACEHOLDER_COLOR = v;
    }
    
}