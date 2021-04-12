import { Injectable } from "@angular/core";
import { Query } from "@datorama/akita";
import { ProjectsState } from "../states";
import { ProjectsStore } from "../stores";

@Injectable({
    providedIn: 'root',
})
export class ProjectsQuery extends Query<ProjectsState>{
    constructor(private projectsStore:ProjectsStore){
        super(projectsStore)
    }

    selectProject(id:string){
        this.unSelectProject(id)

        this.select(state => {
            let selectedProject = state.PROJECTS.find(x => x.ID === id)

            if(selectedProject !== undefined)
                selectedProject.SELECTED = true
          }).subscribe().unsubscribe()
    }

    private unSelectProject(id: string){
        this.select(state => {
            let selectedProject = state.PROJECTS.find(x => x.ID === id)

            if(selectedProject !== undefined)
                selectedProject.SELECTED = false
          }).subscribe().unsubscribe()
    }
}