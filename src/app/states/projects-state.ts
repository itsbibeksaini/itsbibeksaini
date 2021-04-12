import { Project } from "../components/projects/models/project";

export interface ProjectsState{
    PROJECTS: Project[]
}

export function defaultProjectsState (): ProjectsState{
    return {
        PROJECTS: []
    }
}