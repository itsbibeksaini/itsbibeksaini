export class Mockup{
    
    private _ID! : string;
    public get ID() : string {
        return this._ID;
    }
    public set ID(v : string) {
        this._ID = v;
    }
        
    private _IMG_THUMB! : string;
    public get IMG_THUMB() : string {
        return this._IMG_THUMB;
    }
    public set IMG_THUMB(v : string) {
        this._IMG_THUMB = v;
    }
    
    private _SIZE! : string;
    public get SIZE() : string {
        return this._SIZE;
    }
    public set SIZE(v : string) {
        this._SIZE = v;
    }

    private _LINKED_IMG : string[] = [];
    public get LINKED_IMG() : string[] {
        return this._LINKED_IMG;
    }
    public set LINKED_IMG(v : string[]) {
        this._LINKED_IMG = v;
    }
    
}