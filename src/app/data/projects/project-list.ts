import { CustomListItem } from "src/app/components/custom-list/models";

export const PROJECT_LIST: CustomListItem[] = []

let taskManager:CustomListItem = new CustomListItem()
taskManager.ID = "task_manager"
taskManager.TITLE = "Task Manager"
taskManager.SUB_TITLE = "Micro-services app"

PROJECT_LIST.push(taskManager)




// this.addProject("mailer","Mailer", "Angular app", false)
    // this.addProject("music_store","Music Store", "Asp.net app", false)
    // this.addProject("chat_bot","Chat bot", "Android app", false)
    // this.addProject("import_export_utility","Import Export Utility", "Winforms app", false)
    // this.addProject("library_management_system","Library management system", "C++", false)