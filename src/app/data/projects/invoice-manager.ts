import { Project } from "src/app/components/projects/models/project";
import * as backendSkills from '../skills/backend-skills'
import * as frontendSkills from '../skills/frontend-skills'

export const invoiceManager:Project = new Project()
invoiceManager.ID = "invoice_manager"
invoiceManager.TITLE = "Invoice Manager"
invoiceManager.SUB_TITLE = "ASP.NET MVC app"
invoiceManager.DESCRIPTION = "Invoice Manager is a web application which helps user to manage their invoices. It has CRUD operations for creating, updating, deleting and viewing invoices. It also has a feature to generate invoices in PDF format."

invoiceManager.TECH_USED.push(backendSkills.skill_aspnetmvc)
invoiceManager.TECH_USED.push(frontendSkills.skill_html5)
invoiceManager.TECH_USED.push(frontendSkills.skill_css3)
invoiceManager.TECH_USED.push(frontendSkills.skill_js)
invoiceManager.TECH_USED.push(frontendSkills.skill_jquery)