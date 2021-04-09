import { Skill, SkillsCategory } from "../components/skills/models";

export const SKILLS: SkillsCategory[] = []

let backendSkills: SkillsCategory = new SkillsCategory()
backendSkills.TITLE = "Backend"

let skill_dotnet:Skill = new Skill()
skill_dotnet.IMAGE = "assets/skills/backend/dotnet.png"
skill_dotnet.TITLE = "Dotnet"
backendSkills.SKILLS.push(skill_dotnet)

let skill_entityframework:Skill = new Skill()
skill_entityframework.IMAGE = "assets/skills/backend/entityframework.png"
skill_entityframework.TITLE = "Entity framework"
backendSkills.SKILLS.push(skill_entityframework)

let skill_java:Skill = new Skill()
skill_java.IMAGE = "assets/skills/backend/java.png"
skill_java.TITLE = "Java"
backendSkills.SKILLS.push(skill_java)

let skill_springboot:Skill = new Skill()
skill_springboot.IMAGE = "assets/skills/backend/springboot.png"
skill_springboot.TITLE = "Spring boot"
backendSkills.SKILLS.push(skill_springboot)

let frontendSkills: SkillsCategory = new SkillsCategory()
frontendSkills.TITLE = "Frontend"

let skill_angular:Skill = new Skill()
skill_angular.IMAGE = "assets/skills/frontend/angular.png"
skill_angular.TITLE = "Angular"
frontendSkills.SKILLS.push(skill_angular)

let skill_css3:Skill = new Skill()
skill_css3.IMAGE = "assets/skills/frontend/css3.png"
skill_css3.TITLE = "CSS3"
frontendSkills.SKILLS.push(skill_css3)

let databaseToolsSkills: SkillsCategory = new SkillsCategory()
databaseToolsSkills.TITLE = "Database Tools"

let deploymentSkills: SkillsCategory = new SkillsCategory()
deploymentSkills.TITLE = "Deployment"

let otherSkills: SkillsCategory = new SkillsCategory()
otherSkills.TITLE = "Others"

SKILLS.push(backendSkills)
SKILLS.push(frontendSkills)
SKILLS.push(databaseToolsSkills)
SKILLS.push(deploymentSkills)
SKILLS.push(otherSkills)