import { Component, OnInit } from '@angular/core';
import { faArrowLeft, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs/operators';
import { ProjectsQuery } from 'src/app/components/projects/state/projects-query';
import { CustomListItem } from '../custom-list/models';
import { CustomListStore } from '../custom-list/state/custom-list-store';
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

  testList:Project[] = []


  constructor(private customListStore: CustomListStore, 
              private projectsStore:ProjectsStore, 
              private projectsQuery:ProjectsQuery, 
              private projectSelector:ProjectSelectorService) {
    
    this.buildProjectList()
    customListStore.update(() => {
      return{
        ITEMS: this.projectList
      }
    })

    projectsStore.update(() => {
      return{
        PROJECTS: this.projectDetailsList
      }
    })

    projectsQuery.select(state => {    
      return state.PROJECTS
    }).subscribe(res =>{
      this.testList = res
    })
    
    projectSelector.currentSelectedID().pipe(filter(x=>x!=="")).subscribe(id =>{
      projectsQuery.select(state => state.PROJECTS.find(x => x.ID)).subscribe(project => {
        if(project !== undefined && project.SELECTED){
          this.hasSelectedProject = true
          this.selectedProject = project
        }
          
      }).unsubscribe()      
    })
  }

  private buildProjectList(){    
    this.addProject("task_manager","Task Manager", "Micro-services app")
    this.addProjectDetails("task_manager", "Task Manager", "Micro-service app","Task manager is built on micro-services architecture providing management services like invoice manager and task board. The whole project is divided into various micro-apps based on their individual responsibility that each micro app need to perform." ,false)
    
    // this.addProject("mailer","Mailer", "Angular app", false)
    // this.addProject("music_store","Music Store", "Asp.net app", false)
    // this.addProject("chat_bot","Chat bot", "Android app", false)
    // this.addProject("import_export_utility","Import Export Utility", "Winforms app", false)
    // this.addProject("library_management_system","Library management system", "C++", false)
  }

  private addProject(id:string, title: string, subTitle: string){
    let project:CustomListItem = new CustomListItem()
    project.ID = id
    project.TITLE = title
    project.SUB_TITLE = subTitle
    project.IS_SELECTED = false
    
    this.projectList.push(project)
  }
  
  private addProjectDetails(id: string, title:string, subtitle: string, description: string, archieved:boolean){
    let project:Project = new Project()
    project.ID = id
    project.TITLE = title
    project.SUB_TITLE = subtitle
    project.DESCRIPTION = description
    project.SELECTED = false
    project.ARCHIEVED = archieved

    this.projectDetailsList.push(project)
  }

  ngOnInit(): void {
  }

}
