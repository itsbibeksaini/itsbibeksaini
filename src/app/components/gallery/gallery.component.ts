import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  
})
export class GalleryComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  viewImage(){
    const dialogRef = this.dialog.open(ImageViewerComponent);

  }
}
