import { Project } from "src/app/components/projects/models/project";
import { mailer } from "./mailer-details";
import { musicstore } from "./music-store-details";
import { taskManager } from "./task-manager-details";

export const PROJECTS_DETAILS:Project[] = []

PROJECTS_DETAILS.push(taskManager)
PROJECTS_DETAILS.push(mailer)
PROJECTS_DETAILS.push(musicstore)
