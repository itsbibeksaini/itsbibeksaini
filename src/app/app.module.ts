import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import {MatButtonModule} from '@angular/material/button';
import { LinkDirective } from './directives/link/link.directive';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { CustomListComponent } from './components/custom-list/custom-list.component';
import { SelectItemDirective } from './components/custom-list/directive/select-item/select-item.directive';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    WorkComponent,
    ProjectsComponent,
    SkillsComponent,
    LinkDirective,
    AboutMeComponent,
    ContactMeComponent,
    CustomListComponent,
    SelectItemDirective    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatRippleModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
