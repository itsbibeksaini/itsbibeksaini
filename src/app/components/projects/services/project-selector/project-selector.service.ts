import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectsQuery } from 'src/app/queries/projects-query';
import { ProjectsStore } from 'src/app/stores';

@Injectable({
  providedIn: 'root'
})
export class ProjectSelectorService {

  selectedProjectID: BehaviorSubject<string>
  constructor(private projectsQuery:ProjectsQuery) { 
    this.selectedProjectID = new BehaviorSubject<string>("")
  }

  selectProject(id:string){    
    this.projectsQuery.selectProject(id)
    this.selectedProjectID.next(id)
  }

  currentSelectedID():Observable<string>{
    return this.selectedProjectID.asObservable()
  }
}
