import { Project } from "src/app/components/projects/models/project";
import * as frontendSkills from '../skills/frontend-skills'

export const mailer:Project = new Project()
mailer.ID = "mailer"
mailer.TITLE = "Mailer",
mailer.SUB_TITLE = "Angular app"
mailer.DESCRIPTION = "Mailer app is built on angular framewrok providing mail viewing experience. The project is built as SPA where content is refreshed and their state is maintained. App has state management implemented using datorama/akita."
mailer.APP_LINK = "http://mailer.itsbibeksaini.com"
mailer.PROJECT_STRUCTURE_LINK = ""

mailer.TECH_USED.push(frontendSkills.skill_angular)
mailer.TECH_USED.push(frontendSkills.skill_akita)
mailer.TECH_USED.push(frontendSkills.skill_typescript)
mailer.TECH_USED.push(frontendSkills.skill_bootstrap)