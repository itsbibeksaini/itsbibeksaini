import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent
},{
  path:'work',
  component: WorkComponent
},{
  path: 'projects',
  component: ProjectsComponent
},{
  path: 'skills',
  component: SkillsComponent
},{
  path:'about-me',
  component: AboutMeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
