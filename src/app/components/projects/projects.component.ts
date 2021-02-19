import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { faCaretLeft, faCaretRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  faExternalLinkAlt = faExternalLinkAlt
  faCaretLeft = faCaretLeft
  faCaretRight = faCaretRight
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  readMore(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '900px',
      height: '650px'
      // data: {name: this.name, animal: this.animal}
    });
  }
  

}
