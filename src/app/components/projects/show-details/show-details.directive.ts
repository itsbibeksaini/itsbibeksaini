import { Directive, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../dialogs/project-details/project-details.component';

@Directive({
  selector: '[showDetails]'
})
export class ShowDetailsDirective {

  constructor(public dialog: MatDialog) { }

  @HostListener("click") click(){
    this.openDialog()
  }

  openDialog() {
    this.dialog.open(ProjectDetailsComponent, {
      // data: {
      //   animal: 'panda',
      // },
      disableClose:true,
      minWidth: '70%',
      autoFocus: false
    });
  }

}
