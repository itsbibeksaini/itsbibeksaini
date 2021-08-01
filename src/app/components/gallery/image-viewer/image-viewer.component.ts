import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  faTimes = faTimes

  prevImages:string[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: string[]) { 
    this.prevImages = data
  }

  ngOnInit(): void {
  }

}
