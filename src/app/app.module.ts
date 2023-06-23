import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundComponent } from './background/background.component';
import { CardsComponent } from './cards/cards.component';
import { LeftSideComponent } from './cards/left-side/left-side.component';
import { RightSideComponent } from './cards/right-side/right-side.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundComponent,
    CardsComponent,
    LeftSideComponent,
    RightSideComponent,
    HomeComponent,
    ProjectsComponent,
    MessagesComponent,
    NotificationsComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
