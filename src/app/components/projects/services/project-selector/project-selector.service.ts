import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectsQuery } from 'src/app/components/projects/state/projects-query';
import { PROJECTS_DETAILS } from 'src/app/data/projects/projects';
import { ProjectsStore } from '../../state/projects-store';


@Injectable({
  providedIn: 'root'
})
export class ProjectSelectorService {

  selectedProjectID: BehaviorSubject<string>
  constructor(private projectStore:ProjectsStore) { 
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
