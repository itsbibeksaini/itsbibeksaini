import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faArchive, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  faTimes = faTimes
  faArchive = faArchive
  clickedProject: Project
  images = ['assets/projects/taskmanager/tm_microservices.png', 'assets/projects/taskmanager/premission-center.png']

  constructor(@Inject(MAT_DIALOG_DATA) public project: any) {
    this.clickedProject = project.project
   }

  ngOnInit(): void {
  }

  

}
