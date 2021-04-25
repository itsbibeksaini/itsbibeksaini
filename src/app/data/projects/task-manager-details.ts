import { GalleryImage } from "src/app/components/projects/models/gallery-image"
import { Project } from "src/app/components/projects/models/project"
import * as backendSkills from '../skills/backend-skills'
import * as databaseTools from '../skills/database-tools'
import * as deploymentSkills from '../skills/deployment-skills'
import * as frontendSkills from '../skills/frontend-skills'
import * as otherSkills from '../skills/others-skills'


export const taskManager:Project = new Project()
taskManager.ID = "task_manager"
taskManager.TITLE = "Task Manager",
taskManager.SUB_TITLE = "Micro-services app"
taskManager.DESCRIPTION = "Task manager is built on micro-services architecture providing management services like invoice manager and task board. The whole project is divided into various micro-apps based on their individual responsibility that each micro app need to perform. App leverage RESTful pattern for communication with client and outer world while make use of gRPC framework for its internal communication."
taskManager.PROJECT_STRUCTURE_LINK = "https://clientapp.structure.itsbibeksaini.com/overview.html"

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

taskManager.TECH_USED.push(frontendSkills.skill_angular)
taskManager.TECH_USED.push(backendSkills.skill_dotnet)
taskManager.TECH_USED.push(backendSkills.skill_java)
taskManager.TECH_USED.push(backendSkills.skill_springboot)
taskManager.TECH_USED.push(backendSkills.skill_entityframework)
taskManager.TECH_USED.push(otherSkills.skill_grpc)
taskManager.TECH_USED.push(frontendSkills.skill_typescript)
taskManager.TECH_USED.push(deploymentSkills.skill_docker)
taskManager.TECH_USED.push(deploymentSkills.skill_kubernetes)
taskManager.TECH_USED.push(databaseTools.skill_sql)
taskManager.TECH_USED.push(databaseTools.skill_mongodb)
taskManager.TECH_USED.push(deploymentSkills.skill_azure)
taskManager.TECH_USED.push(deploymentSkills.skill_aks)
taskManager.TECH_USED.push(deploymentSkills.skill_azure_pipeline)

taskManager.TECH_USED.push(otherSkills.skill_ocelot)
taskManager.TECH_USED.push(otherSkills.skill_consul)
taskManager.TECH_USED.push(otherSkills.skill_swagger)

function addGalelryImage(imgSrc:string){
    let galleryImage:GalleryImage = new GalleryImage()
    galleryImage.IMAGE = imgSrc    
    taskManager.GALLERY.push(galleryImage)
}