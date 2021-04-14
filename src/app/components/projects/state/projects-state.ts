import { Project } from "../models/project";

export interface ProjectsState{
    PROJECTS: Project[]
}

export function defaultProjectsState (): ProjectsState{
    return {
        PROJECTS: []
    }
}