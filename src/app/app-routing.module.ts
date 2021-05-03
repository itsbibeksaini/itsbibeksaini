import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent, HomeComponent, ProjectsComponent, SkillsComponent, WorkComponent } from './components';
import { ContactComponent } from './components/contact/contact.component';

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
}, {
  path:'contact',
  component: ContactComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
