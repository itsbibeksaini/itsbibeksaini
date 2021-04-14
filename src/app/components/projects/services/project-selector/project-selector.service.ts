import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProjectsQuery } from 'src/app/components/projects/state/projects-query';
import { PROJECTS_DETAILS } from 'src/app/data/projects/projects';
import { Project } from '../../models/project';
import { ProjectsStore } from '../../state/projects-store';


@Injectable({
  providedIn: 'root'
})
export class ProjectSelectorService {

  selectedProjectID: BehaviorSubject<string>
  constructor(private projectStore:ProjectsStore, private projectQuery: ProjectsQuery) { 
    this.selectedProjectID = new BehaviorSubject<string>("")
    this.addProjects()
  }

  addProjects(){
    this.projectStore.update(state => {
      return {
        PROJECTS: PROJECTS_DETAILS
      }
    })
  }

  getSelectedProject():Observable<Project | undefined>{
    return this.projectQuery.select(state => state.PROJECTS.find(x => x.SELECTED))
  }

  selectProject(id:string){    
    this.projectStore.selectProject(id)
    this.selectedProjectID.next(id)
  }

  unselectProjects(){
    this.projectStore.unselectAll()
  }

  currentSelectedID():Observable<string>{
    return this.selectedProjectID.asObservable()
  }
}
