import {Experience} from './experience';
export const WORK_EXPERIENCE: Experience[] = [];

let seniorSoftwareEngineer:Experience = new Experience()
seniorSoftwareEngineer.START_DATE = "December 2020"
seniorSoftwareEngineer.END_DATE = "Present"
seniorSoftwareEngineer.POSITION = "Senior Software Engineer."
seniorSoftwareEngineer.COMPANY = "CatalystOne"
seniorSoftwareEngineer.INDEX = 4
seniorSoftwareEngineer.addJobDescription("Developed frontend applications, re-usable components using Angular(8+), RxJS.")
seniorSoftwareEngineer.addJobDescription("Developed UI/UX components using HTML5, CSS3(Bootstrap, Material UI, Animation css).")
seniorSoftwareEngineer.addJobDescription("Built RESTful Api to perform CRUD operations.")
seniorSoftwareEngineer.addJobDescription("Mentored multiple teams for building strategies of various modules.")
seniorSoftwareEngineer.addJobDescription("Used Jira, Confluence for best practices, software documentation and sprint management.")
WORK_EXPERIENCE.push(seniorSoftwareEngineer)

let softwareEngineer:Experience = new Experience()
softwareEngineer.START_DATE = "May 2018"
softwareEngineer.END_DATE = "December 2020"
softwareEngineer.POSITION = "Software Developer."
softwareEngineer.COMPANY = "CatalystOne"
softwareEngineer.addJobDescription("Developed candidate api backend so CatalystOne application can be integrated with 3rd party applications like ReachMee.")
softwareEngineer.addJobDescription("Designed and implemented Invoice Manager to help client's organisation digitise their invoice generation system and manage their sales data.")
softwareEngineer.addJobDescription("Modified existing code to increase performance of application by 70%.")
softwareEngineer.addJobDescription("Implemented private email feature in module workflows which let user access application as temporary/external user and which minimal access to resources.")
softwareEngineer.addJobDescription("Implemented support for visibility filters feature in workflow module to show or hide fields in user profile based on filter criteria.")
softwareEngineer.INDEX = 3;
WORK_EXPERIENCE.push(softwareEngineer);

let associateSoftwareEngineer:Experience = new Experience()
associateSoftwareEngineer.START_DATE = "July 2016"
associateSoftwareEngineer.END_DATE = "May 2018"
associateSoftwareEngineer.POSITION = "Associate Java Developer."
associateSoftwareEngineer.COMPANY = "CatalystOne"
associateSoftwareEngineer.addJobDescription("Implemented support for multiple role profiles in workflows module so users can assign task to their different profiles.")
associateSoftwareEngineer.addJobDescription("Implemented new date calculation mechanism that converts entered days to deadline date for task based on start date so users can set deadline to various task.")
associateSoftwareEngineer.addJobDescription("Implemented new UI for module workflows so user experience can be enhanced using HTML5, CSS3, jQuery.")
associateSoftwareEngineer.addJobDescription("Implemented new feature in trigger mails to send notification mails when some data is scheduled in user profile so user get notified.")
associateSoftwareEngineer.addJobDescription("Developed custom system roles and integrated them to person type fields in CatalystOne application so that an organisation can create custom roles as per their organisation needs.")
associateSoftwareEngineer.INDEX = 2;
WORK_EXPERIENCE.push(associateSoftwareEngineer);

let trainee:Experience = new Experience()
trainee.START_DATE = "April 2016"
trainee.END_DATE = "July 2016"
trainee.POSITION = "Trainee Java Developer."
trainee.COMPANY = "CatalystOne"
trainee.addJobDescription("Designed and implemented rewards and recognition(R&R) module that will help to increase motivation of employee to achieve the best achievement.")
trainee.addJobDescription("Documented various sections of application on Confluence to be used for training new hires.")
trainee.INDEX = 1;
WORK_EXPERIENCE.push(trainee);
