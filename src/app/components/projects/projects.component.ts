import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { CustomListItem } from '../custom-list/models';
import { CustomListService } from '../custom-list/services';
import { Project } from './models/project';
import { ProjectSelectorService } from './services';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  images = ['assets/projects/taskmanager/tm_microservices.png', 'assets/projects/taskmanager/premission-center.png']

  faArrowLeft = faLongArrowAltLeft
  faExternalLinkAlt = faExternalLinkAlt
  projectList: CustomListItem[] = []
  projectDetailsList: Project[] = []

  hasSelectedProject:boolean = false
  selectedProject!:Project

  constructor(private custonlistService:CustomListService,                            
              private projectSelector:ProjectSelectorService) {
      
      projectSelector.getSelectedProject().subscribe(project =>{
        if(project !== undefined){
          this.hasSelectedProject = true
          this.selectedProject = project
        }
      })
  }

  ngOnInit(): void {
  }

  backButton(){    
    this.hasSelectedProject = false
    this.custonlistService.unselectAll()
    this.projectSelector.unselectProjects()
  }

}
