import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs/operators';
import { ProjectsQuery } from 'src/app/components/projects/state/projects-query';
import { CustomListItem } from '../custom-list/models';
import { CustomListService } from '../custom-list/services';
import { Project } from './models/project';
import { ProjectSelectorService } from './services';
import { ProjectsStore } from './state/projects-store';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  faArrowLeft = faLongArrowAltLeft
  projectList: CustomListItem[] = []
  projectDetailsList: Project[] = []

  hasSelectedProject:boolean = false
  selectedProject!:Project

  constructor(private custonlistService:CustomListService,              
              private projectsQuery:ProjectsQuery, 
              private projectSelector:ProjectSelectorService) {
    
    projectSelector.currentSelectedID().pipe(filter(x=>x!=="")).subscribe(id =>{
      projectsQuery.select(state => state.PROJECTS.find(x => x.ID)).subscribe(project => {        
        if(project !== undefined && project.SELECTED){
          this.hasSelectedProject = true
          this.selectedProject = project
        }          
      }).unsubscribe()      
    })
  }

  private addProject(id:string, title: string, subTitle: string){
    let project:CustomListItem = new CustomListItem()
    project.ID = id
    project.TITLE = title
    project.SUB_TITLE = subTitle
    project.IS_SELECTED = false
    
    this.projectList.push(project)
  }
  
  

  ngOnInit(): void {
  }

  backButton(){    
    this.hasSelectedProject = false
    this.custonlistService.unselectAll()
    this.projectSelector.unselectProjects()
  }

}
