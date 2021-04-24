import { CustomListItem } from "src/app/components/custom-list/models";

export const PROJECT_LIST: CustomListItem[] = []

addProject("task_manager", "Task Manager", "Micro-services app")
addProject("mailer","Mailer app", "Angular app")

function addProject(id:string, title:string, subTtile:string){
    let project:CustomListItem = new CustomListItem()
    project.ID = id
    project.TITLE = title
    project.SUB_TITLE = subTtile
    PROJECT_LIST.push(project)
}


// this.addProject("mailer","Mailer", "Angular app", false)
    // this.addProject("music_store","Music Store", "Asp.net app", false)
    // this.addProject("chat_bot","Chat bot", "Android app", false)
    // this.addProject("import_export_utility","Import Export Utility", "Winforms app", false)
    // this.addProject("library_management_system","Library management system", "C++", false)