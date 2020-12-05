import {Experience} from './experience';
export const WORK_EXPERIENCE: Array<Experience> = new Array<Experience>()

let softwareEngineer:Experience = new Experience()
softwareEngineer.START_DATE = "May 2018"
softwareEngineer.END_DATE = "Present"
softwareEngineer.POSITION = "Software engineer."
softwareEngineer.COMPANY = "CatalystOne"
softwareEngineer.addJobDescription("Collaborated with cross-functional development team members to analyze potential system solutions based on evolving client requirements.")
softwareEngineer.addJobDescription("Identified and tracked defects with SonarQube and supported developers in resolving problems by completing additional tests.")
softwareEngineer.addJobDescription("Debugged code and located root causes of problems by reviewing configuration files and logs.")
softwareEngineer.addJobDescription("Collaborated with developers and product owners to stay current on product features and intended functionality.")
softwareEngineer.INDEX = 3;
WORK_EXPERIENCE.push(softwareEngineer);

let associateSoftwareEngineer:Experience = new Experience()
associateSoftwareEngineer.START_DATE = "July 2016"
associateSoftwareEngineer.END_DATE = "May 2018"
associateSoftwareEngineer.POSITION = "Associate software engineer."
associateSoftwareEngineer.COMPANY = "CatalystOne"
associateSoftwareEngineer.addJobDescription("Researched, designed and implemented scalable applications for information identification, extraction, analysis, retrieval and indexing.")
associateSoftwareEngineer.addJobDescription("Tested troubleshooting methods, devised innovative solutions, and documented resolutions for inclusion in knowledge base for support team use.")
associateSoftwareEngineer.addJobDescription("Modified existing SAAS software to correct coding errors, upgrade interfaces and improve overall performance.")
associateSoftwareEngineer.addJobDescription("Worked with project managers, developers, quality assurance and customers to resolve technical issues.")
associateSoftwareEngineer.addJobDescription("Introduced methodologies and best practices to software development division to enhance product definition and application customization.")
associateSoftwareEngineer.INDEX = 2;
WORK_EXPERIENCE.push(associateSoftwareEngineer);

let trainee:Experience = new Experience()
trainee.START_DATE = "April 2016"
trainee.END_DATE = "July 2016"
trainee.POSITION = "Trainee."
trainee.COMPANY = "CatalystOne"
trainee.addJobDescription("Participated with preparation of design documents for trackwork, including alignments, specifications, criteria details and estimates.")
trainee.addJobDescription("Collaborated with developers and product owners to stay current on product features and intended functionality.")
trainee.INDEX = 1;
WORK_EXPERIENCE.push(trainee);