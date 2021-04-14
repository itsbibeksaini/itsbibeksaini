import { Skill, SkillsCategory } from "../../components/skills/models";
import * as beSkills from "./backend-skills";
import * as feSkills from "./frontend-skills";
import * as dbToolsSkills from "./database-tools"
import * as dSkills from "./deployment-skills"
import * as oSkills from "./others-skills"

export const SKILLS: SkillsCategory[] = []

let backendSkills: SkillsCategory = new SkillsCategory()
backendSkills.TITLE = "Backend"
backendSkills.SKILLS.push(beSkills.skill_dotnet)
backendSkills.SKILLS.push(beSkills.skill_entityframework)
backendSkills.SKILLS.push(beSkills.skill_java)
backendSkills.SKILLS.push(beSkills.skill_springboot)

let frontendSkills: SkillsCategory = new SkillsCategory()
frontendSkills.TITLE = "Frontend"
frontendSkills.SKILLS.push(feSkills.skill_angular)
frontendSkills.SKILLS.push(feSkills.skill_css3)
frontendSkills.SKILLS.push(feSkills.skill_html5)
frontendSkills.SKILLS.push(feSkills.skill_jquery)
frontendSkills.SKILLS.push(feSkills.skill_js)
frontendSkills.SKILLS.push(feSkills.skill_typescript)

let databaseToolsSkills: SkillsCategory = new SkillsCategory()
databaseToolsSkills.TITLE = "Database Tools"
databaseToolsSkills.SKILLS.push(dbToolsSkills.skill_azuredatastudio)
databaseToolsSkills.SKILLS.push(dbToolsSkills.skill_mongodb)
databaseToolsSkills.SKILLS.push(dbToolsSkills.skill_sql)
databaseToolsSkills.SKILLS.push(dbToolsSkills.skill_ssms)

let deploymentSkills: SkillsCategory = new SkillsCategory()
deploymentSkills.TITLE = "Deployment"
deploymentSkills.SKILLS.push(dSkills.skill_azure)
deploymentSkills.SKILLS.push(dSkills.skill_docker)
deploymentSkills.SKILLS.push(dSkills.skill_helmcharts)
deploymentSkills.SKILLS.push(dSkills.skill_kubernetes)

let otherSkills: SkillsCategory = new SkillsCategory()
otherSkills.TITLE = "Others"
otherSkills.SKILLS.push(oSkills.skill_confluence,oSkills.skill_consul, oSkills.skill_fork,oSkills.skill_git,oSkills.skill_githubdesktop,oSkills.skill_grpc, oSkills.skill_intelijidea,oSkills.skill_jira,oSkills.skill_ocelot, oSkills.skill_postman,oSkills.skill_swagger,oSkills.skill_visualstudiocode,oSkills.skill_visualstudiomac)

SKILLS.push(backendSkills)
SKILLS.push(frontendSkills)
SKILLS.push(databaseToolsSkills)
SKILLS.push(deploymentSkills)
SKILLS.push(otherSkills)