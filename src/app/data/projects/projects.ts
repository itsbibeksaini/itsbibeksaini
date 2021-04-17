import { GalleryImage } from "src/app/components/projects/models/gallery-image";
import { Project } from "src/app/components/projects/models/project";
import { skill_dotnet, skill_entityframework, skill_java, skill_springboot } from "../skills/backend-skills";
import { skill_mongodb, skill_sql } from "../skills/database-tools";
import { skill_azure, skill_docker, skill_kubernetes } from "../skills/deployment-skills";
import { skill_angular, skill_typescript } from "../skills/frontend-skills";
import { skill_consul, skill_grpc, skill_ocelot, skill_swagger } from "../skills/others-skills";

export const PROJECTS_DETAILS:Project[] = []

let taskManager:Project = new Project()
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

taskManager.TECH_USED.push(skill_angular)
taskManager.TECH_USED.push(skill_dotnet)
taskManager.TECH_USED.push(skill_java)
taskManager.TECH_USED.push(skill_springboot)
taskManager.TECH_USED.push(skill_entityframework)
taskManager.TECH_USED.push(skill_grpc)
taskManager.TECH_USED.push(skill_typescript)
taskManager.TECH_USED.push(skill_docker)
taskManager.TECH_USED.push(skill_kubernetes)
taskManager.TECH_USED.push(skill_sql)
taskManager.TECH_USED.push(skill_mongodb)
taskManager.TECH_USED.push(skill_azure)
taskManager.TECH_USED.push(skill_ocelot)
taskManager.TECH_USED.push(skill_consul)
taskManager.TECH_USED.push(skill_swagger)


PROJECTS_DETAILS.push(taskManager)

function addGalelryImage(imgSrc:string){
    let galleryImage:GalleryImage = new GalleryImage()
    galleryImage.IMAGE = imgSrc    
    taskManager.GALLERY.push(galleryImage)
}