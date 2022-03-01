import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../models/project';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() projectData!: Project
  constructor() { }

  ngOnInit(): void {
  }

}
