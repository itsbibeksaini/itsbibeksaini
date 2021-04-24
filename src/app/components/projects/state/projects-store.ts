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

    selectProject(id:string){
        this.unselectAll()

        this.update(state => {
            let project = state.PROJECTS.find(x => x.ID === id)

            if(project !== undefined)
                project.SELECTED = true
        })
    }

    private unSelectProject(id: string){
        this.update(state => {
            let selectedProject = state.PROJECTS.find(x => x.ID === id)

            if(selectedProject !== undefined)
                selectedProject.SELECTED = false
        })
    }

    unselectAll(){
        this.update(state => {
            let selectProject = state.PROJECTS.find(x => x.SELECTED)

            if(selectProject !== undefined)
                selectProject.SELECTED = false
        })
    }
}