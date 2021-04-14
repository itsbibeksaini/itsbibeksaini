import { Project } from "src/app/components/projects/models/project";
import { skill_dotnet, skill_java } from "../skills/backend-skills";
import { skill_angular } from "../skills/frontend-skills";

export const PROJECTS_DETAILS:Project[] = []

let taskManager:Project = new Project()
taskManager.ID = "task_manager"
taskManager.TITLE = "Task Manager",
taskManager.SUB_TITLE = "Micro-services app"
taskManager.DESCRIPTION = "Task manager is built on micro-services architecture providing management services like invoice manager and task board. The whole project is divided into various micro-apps based on their individual responsibility that each micro app need to perform."
taskManager.TECH_USED.push(skill_dotnet)
taskManager.TECH_USED.push(skill_java)
taskManager.TECH_USED.push(skill_angular)
PROJECTS_DETAILS.push(taskManager)