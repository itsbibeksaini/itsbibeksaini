import { GalleryImage } from "src/app/components/projects/models/gallery-image";
import { Project } from "src/app/components/projects/models/project";

export const musicstore: Project = new Project();
musicstore.ID = "music_store"
musicstore.TITLE = "Music Store",
musicstore.SUB_TITLE = "ASP.NET MVC"
musicstore.DESCRIPTION = ""
musicstore.ARCHIEVED = true

addGalelryImage("assets/projects/musicstore/musicstore_home1.png")
addGalelryImage("assets/projects/musicstore/musicstore_home2.png")

function addGalelryImage(imgSrc:string){
    let galleryImage:GalleryImage = new GalleryImage()
    galleryImage.IMAGE = imgSrc    
    musicstore.GALLERY.push(galleryImage)
}