import { Component, OnInit } from '@angular/core';
import { CustomListStore } from 'src/app/stores';
import { CustomListItem } from '../custom-list/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectList: CustomListItem[] = []

  constructor(private customListStore: CustomListStore) {
    this.buildProjectList()
    customListStore.update(() => {
      return{
        ITEMS: this.projectList
      }
    })
  }

  private buildProjectList(){
    this.addProject("task_manager","Task Manager", "Micro-services app", false)
    this.addProject("mailer","Mailer", "Angular app", false)
    this.addProject("music_store","Music Store", "Asp.net app", false)
    this.addProject("chat_bot","Chat bot", "Android app", false)
    this.addProject("import_export_utility","Import Export Utility", "Winforms app", false)
    this.addProject("library_management_system","Library management system", "C++", false)
  }

  private addProject(id:string, title: string, subTitle: string, isSelected: boolean){
    let project:CustomListItem = new CustomListItem()
    project.ID = id
    project.TITLE = title
    project.SUB_TITLE = subTitle
    project.IS_SELECTED = isSelected
    this.projectList.push(project)
  }

  ngOnInit(): void {
  }

}
