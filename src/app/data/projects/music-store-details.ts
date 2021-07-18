import { GalleryImage } from "src/app/components/projects/models/gallery-image";
import { Project } from "src/app/components/projects/models/project";
import * as backendSkills from '../skills/backend-skills'
import * as databaseTools from '../skills/database-tools'
import * as deploymentSkills from '../skills/deployment-skills'
import * as frontendSkills from '../skills/frontend-skills'

export const musicstore: Project = new Project();
musicstore.ID = "music_store"
musicstore.TITLE = "Music Store",
musicstore.SUB_TITLE = "ASP.NET MVC"
musicstore.DESCRIPTION = "Music Store Web App let users access their favourite music albums and listen them over the internet. User's can create personalized playlist, add album or songs to their favourites"
musicstore.ARCHIEVED = true

addGalelryImage("assets/projects/musicstore/musicstore_home1.png")
addGalelryImage("assets/projects/musicstore/musicstore_home2.png")

musicstore.TECH_USED.push(frontendSkills.skill_html5)
musicstore.TECH_USED.push(frontendSkills.skill_bootstrap)
musicstore.TECH_USED.push(frontendSkills.skill_jquery)
musicstore.TECH_USED.push(frontendSkills.skill_js)

musicstore.TECH_USED.push(backendSkills.skill_aspnetmvc)
musicstore.TECH_USED.push(backendSkills.skill_csharpnet)
musicstore.TECH_USED.push(backendSkills.skill_entityframework)
musicstore.TECH_USED.push(backendSkills.skill_linq)

musicstore.TECH_USED.push(databaseTools.skill_sql)
musicstore.TECH_USED.push(databaseTools.skill_ssms)

function addGalelryImage(imgSrc:string){
    let galleryImage:GalleryImage = new GalleryImage()
    galleryImage.IMAGE = imgSrc    
    musicstore.GALLERY.push(galleryImage)
}