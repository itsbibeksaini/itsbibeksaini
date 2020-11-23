import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatButtonModule}  from '@angular/material/button'
import {MatTooltipModule} from '@angular/material/tooltip';
import { LinkDirective } from './directives/link/link.directive'
import {MatToolbarModule} from '@angular/material/toolbar'
@NgModule({
  declarations: [
    AppComponent,
    LinkDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
