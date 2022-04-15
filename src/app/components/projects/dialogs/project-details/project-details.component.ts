import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  faTimes = faTimes
  clickedProject: Project
  constructor(@Inject(MAT_DIALOG_DATA) public project: any) {
    this.clickedProject = project.project
   }

  ngOnInit(): void {
  }

  

}
