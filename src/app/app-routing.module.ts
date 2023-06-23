import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'projects',
    component: ProjectsComponent
  }, {
    path: 'messages',
    component: MessagesComponent
  }, {
    path: 'notifications',
    component: NotificationsComponent
  }, {
    path: 'post-project',
    component: CreateProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
