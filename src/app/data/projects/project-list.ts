import { CustomListItem } from "src/app/components/custom-list/models";

export const PROJECT_LIST: CustomListItem[] = []

addProject("task_manager", "Task Manager", "Micro-services app")
addProject("mailer","Mailer app", "Angular app")
// addProject("invoice_manager","Invoice Manager", ".NET Core web api")
// addProject("task_board","Task Borad", ".NET Core web api")
addProject("music_store","Music Store", "ASP.NET MVC")
// addProject("chat_bot","Chat bot", "Android app")
// addProject("import_export_utility","Import Export Utility", "Winforms app")
// addProject("library_management_system","Library management system", "C++")

function addProject(id:string, title:string, subTtile:string){
    let project:CustomListItem = new CustomListItem()
    project.ID = id
    project.TITLE = title
    project.SUB_TITLE = subTtile
    PROJECT_LIST.push(project)
}
