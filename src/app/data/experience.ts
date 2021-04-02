export class Experience{
    
    private _START_DATE! : string;
    public get START_DATE() : string {
        return this._START_DATE;
    }
    public set START_DATE(v : string) {
        this._START_DATE = v;
    }
    
    private _END_DATE! : string;
    public get END_DATE() : string {
        return this._END_DATE;
    }
    public set END_DATE(v : string) {
        this._END_DATE = v;
    }
    
    private _POSITION! : string;
    public get POSITION() : string {
        return this._POSITION;
    }
    public set POSITION(v : string) {
        this._POSITION = v;
    }

    private _COMPANY! : string;
    public get COMPANY() : string {
        return this._COMPANY;
    }
    public set COMPANY(v : string) {
        this._COMPANY = v;
    }
    
    private _JOB_DESCRIPTION: Array<string> = new Array<string>();
    public get JOB_DESCRIPTION() : Array<string> {
        return this._JOB_DESCRIPTION;
    }
    
    public addJobDescription(description: string){
        this._JOB_DESCRIPTION.push(description);
    }
    
    private _INDEX! : number;
    public get INDEX() : number {
        return this._INDEX;
    }
    public set INDEX(v : number) {
        this._INDEX = v;
    }    
}