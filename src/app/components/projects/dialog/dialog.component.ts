import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { faCross, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  faTimes = faTimes
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
  }

  close(){
    this.dialogRef.close();
  }

}
