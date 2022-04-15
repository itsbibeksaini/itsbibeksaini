import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  faTimes = faTimes
  constructor() { }

  ngOnInit(): void {
  }

  

}
