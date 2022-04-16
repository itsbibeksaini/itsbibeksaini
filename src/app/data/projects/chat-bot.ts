import { Project } from "src/app/components/projects/models/project";
import * as backendSkills from '../skills/backend-skills'
import * as frontendSkills from '../skills/frontend-skills'

export const chatBot:Project = new Project()
chatBot.ID = "chat_bot"
chatBot.TITLE = "Chat bot"
chatBot.SUB_TITLE = "Java EE and Android app"
chatBot.DESCRIPTION = "Import-Export Utility is a desktop application which helps user to either export their relational database tables to excel sheets and also helps to import excel sheets to relational database tables."
chatBot.ARCHIEVED = true

chatBot.TECH_USED.push(backendSkills.skill_java)
chatBot.TECH_USED.push(frontendSkills.skill_html5)
chatBot.TECH_USED.push(frontendSkills.skill_css3)
chatBot.TECH_USED.push(frontendSkills.skill_js)
chatBot.TECH_USED.push(frontendSkills.skill_jquery)
