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
    this.addProject("Task Manager", "Micro-services app", true)
    this.addProject("Mailer", "Angular app", false)
    this.addProject("Music Store", "Asp.net app", false)
    this.addProject("Chat bot", "Android app", false)
    this.addProject("Import Export Utility", "Winforms app", false)
    this.addProject("Library management system", "C++", false)
  }

  private addProject(title: string, subTitle: string, isSelected: boolean){
    let project:CustomListItem = new CustomListItem()
    project.TITLE = title
    project.SUB_TITLE = subTitle
    project.IS_SELECTED = isSelected
    this.projectList.push(project)
  }

  ngOnInit(): void {
  }

}
