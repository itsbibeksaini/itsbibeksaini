import { GalleryImage } from "src/app/components/projects/models/gallery-image"
import { Project } from "src/app/components/projects/models/project"
import { otherSkills } from "../skills"


export const taskManager:Project = new Project()
taskManager.ID = "task_manager"
taskManager.TITLE = "Task Manager",
taskManager.SUB_TITLE = "Micro-services app"
taskManager.DESCRIPTION = "Task manager is built on micro-services architecture providing management services like invoice manager and task board. The whole project is divided into various micro-apps based on their individual responsibility that each micro app need to perform. App leverage RESTful pattern for communication with client and outer world while make use of gRPC framework for its internal communication."

addGalelryImage("assets/projects/taskmanager/signin.png")
addGalelryImage("assets/projects/taskmanager/home_dashboard.png")
addGalelryImage("assets/projects/taskmanager/create_new_profile.png")
addGalelryImage("assets/projects/taskmanager/profiles.png")
addGalelryImage("assets/projects/taskmanager/change_password.png")
addGalelryImage("assets/projects/taskmanager/change_password_success.png")
addGalelryImage("assets/projects/taskmanager/permission_center.png")
addGalelryImage("assets/projects/taskmanager/settings_home.png")
addGalelryImage("assets/projects/taskmanager/settings_general.png")
addGalelryImage("assets/projects/taskmanager/settings_theme.png")
addGalelryImage("assets/projects/taskmanager/tm_microservices.png")



function addGalelryImage(imgSrc:string){
    let galleryImage:GalleryImage = new GalleryImage()
    galleryImage.IMAGE = imgSrc    
    taskManager.GALLERY.push(galleryImage)
}