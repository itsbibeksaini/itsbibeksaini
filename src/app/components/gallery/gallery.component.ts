import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { MOCKUPS } from 'src/app/data/gallery/mockups';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { Mockup } from './models/mockup';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  
})
export class GalleryComponent implements OnInit {

  availableSizes: string[] = ['grid__item--lg', 'grid__item--sm', 'grid__item--xs']
  displayableMockups: Mockup[];

  constructor(public dialog: MatDialog) {     
    this.displayableMockups = MOCKUPS

    for(let i=0; i<this.displayableMockups.length; i++){      
      let thumbSize = this.availableSizes[Math.floor(Math.random() * this.availableSizes.length)]       
      this.displayableMockups[i].SIZE = thumbSize
    }
        
  }

  ngOnInit(): void {
  }

  prevThumb(key: string){

    let linkedImages = this.displayableMockups.filter(x => x.ID === key)[0].LINKED_IMG;

    const dialogRef = this.dialog.open(ImageViewerComponent,{
      data: linkedImages
    });

  }
}
