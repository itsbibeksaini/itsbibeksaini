import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArchive, faExternalLinkAlt, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { take } from 'rxjs/operators';
import { PROJECT_LIST } from 'src/app/data/projects/project-list';
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
  faGithub = faGithub
  faArchive = faArchive

  projects!: Project[];

  hasSelectedProject:boolean = false
  selectedProject!:Project

  constructor(private projectSelector:ProjectSelectorService) {
      
      projectSelector.getSelectedProject().subscribe(project =>{
        if(project !== undefined){
          this.hasSelectedProject = true
          this.selectedProject = project
        }
      })

      projectSelector.getAllProjects().pipe(take(1)).subscribe(projects =>{
        this.projects = projects
      })
      
  }

  ngOnInit(): void {
  }

  backButton(){    
    this.hasSelectedProject = false    
    this.projectSelector.unselectProjects()
  }

}
