import { Directive, HostListener, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../dialogs/project-details/project-details.component';
import { Project } from '../models/project';

@Directive({
  selector: '[showDetails]'
})
export class ShowDetailsDirective {

  @Input() showDetails!:Project
  constructor(public dialog: MatDialog) { }

  @HostListener("click") click(){
    this.openDialog()
  }

  openDialog() {
    this.dialog.open(ProjectDetailsComponent, {
      data: {
        project: this.showDetails,
      },
      disableClose:true,
      minWidth: '70%',
      autoFocus: false
    });
  }

}
