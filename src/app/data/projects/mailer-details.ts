import { Project } from "src/app/components/projects/models/project";

export const mailer:Project = new Project()
mailer.ID = "mailer"
mailer.TITLE = "Mailer",
mailer.SUB_TITLE = "Angular app"
mailer.DESCRIPTION = "Task manager is built on micro-services architecture providing management services like invoice manager and task board. The whole project is divided into various micro-apps based on their individual responsibility that each micro app need to perform. App leverage RESTful pattern for communication with client and outer world while make use of gRPC framework for its internal communication."