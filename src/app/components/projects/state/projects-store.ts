import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { ProjectsState, defaultProjectsState } from "./projects-state";


@Injectable({
    providedIn: 'root',
})
@StoreConfig({ name: 'projects' })
export class ProjectsStore extends Store<ProjectsState>{
    constructor(){
        super(defaultProjectsState())
    }
}