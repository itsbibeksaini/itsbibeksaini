import { Skill } from "./skill";

export class SkillsCategory{
    
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
    
    private _SKILLS : Skill[] = [];
    public get SKILLS() : Skill[] {
        return this._SKILLS;
    }
    public set SKILLS(v : Skill[]) {
        this._SKILLS = v;
    }   
}