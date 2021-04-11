import { Query } from "@datorama/akita";
import { ProjectsState } from "../states";
import { ProjectsStore } from "../stores";

export class ProjectsQuery extends Query<ProjectsState>{
    constructor(private projectsStore:ProjectsStore){
        super(projectsStore)
    }
}