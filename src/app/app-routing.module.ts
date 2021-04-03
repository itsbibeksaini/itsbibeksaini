import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent, ContactMeComponent, HomeComponent, ProjectsComponent, SkillsComponent, WorkComponent } from './components';

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
},{
  path:'contact-me',
  component: ContactMeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
