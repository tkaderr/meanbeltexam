
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditComponent } from './edit/edit.component';
import { TopicdetailComponent } from './topicdetail/topicdetail.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo:'/login'},
  { path: 'dashboard',component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout',redirectTo:'login'},
  { path: 'topic/:id', component: TopicdetailComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
