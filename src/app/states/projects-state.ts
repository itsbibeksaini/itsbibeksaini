import { Project } from "../components/projects/models/project";

export interface ProjectsState{
    projects: Project[]
}

export function defaultProjectsState (): ProjectsState{
    return {
        projects: []
    }
}