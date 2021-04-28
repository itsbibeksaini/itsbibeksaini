import { Skill } from "../../skills/models";
import { GalleryImage } from "./gallery-image";

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

    private _TECH_USED : Skill[] = [];
    public get TECH_USED() : Skill[] {
        return this._TECH_USED;
    }
    public set TECH_USED(v : Skill[]) {
        this._TECH_USED = v;
    }    
    
    private _GALLERY : GalleryImage[] = [];
    public get GALLERY() : GalleryImage[] {
        return this._GALLERY;
    }
    public set GALLERY(v : GalleryImage[]) {
        this._GALLERY = v;
    }
    
    private _PROJECT_STRUCTURE_LINK! : string;
    public get PROJECT_STRUCTURE_LINK() : string {
        return this._PROJECT_STRUCTURE_LINK;
    }
    public set PROJECT_STRUCTURE_LINK(v : string) {
        this._PROJECT_STRUCTURE_LINK = v;
    }
    
    private _APP_LINK! : string;
    public get APP_LINK() : string {
        return this._APP_LINK;
    }
    public set APP_LINK(v : string) {
        this._APP_LINK = v;
    }
    
    private _ARCHITECTURE_DIAGRAM! : string;
    public get ARCHITECTURE_DIAGRAM() : string {
        return this._ARCHITECTURE_DIAGRAM;
    }
    public set ARCHITECTURE_DIAGRAM(v : string) {
        this._ARCHITECTURE_DIAGRAM = v;
    }
    
    
        
}