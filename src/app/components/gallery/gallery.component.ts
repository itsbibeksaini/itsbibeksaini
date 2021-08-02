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

    let lastIndex = 0;
    for(let i=0; i<this.displayableMockups.length; i++){      
      let randomIndex = this.getRandomNumber(lastIndex)
      this.displayableMockups[i].SIZE = this.availableSizes[randomIndex]
      lastIndex = randomIndex
    }
  }

  getRandomNumber(lastNumber:number):number{
    let randomNumber = Math.floor(Math.random() * this.availableSizes.length)
    while(lastNumber === randomNumber){
      randomNumber = Math.floor(Math.random() * this.availableSizes.length)
    }

    return randomNumber
  }

  ngOnInit(): void {
  }

  prevThumb(key: string){

    let linkedImages = this.displayableMockups.filter(x => x.ID === key)[0].LINKED_IMG;

    if(linkedImages.length > 0)
      this.dialog.open(ImageViewerComponent,{
        data: linkedImages,
        autoFocus: false,
        disableClose: true
      });
      
  }
}
