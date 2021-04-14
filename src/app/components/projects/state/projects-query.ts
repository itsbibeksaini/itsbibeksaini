import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { ProjectsState } from "./projects-state";
import { ProjectsStore } from "./projects-store";


@Injectable({
    providedIn: 'root',
})
export class ProjectsQuery extends Query<ProjectsState>{
    constructor(private projectsStore:ProjectsStore){
        super(projectsStore)
    }

    
}