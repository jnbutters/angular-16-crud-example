import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { AddTutorialSpringComponent } from './components/add-tutorial-spring/add-tutorial-spring.component';
import { TutorialDetailsSpringComponent } from './components/tutorial-details-spring/tutorial-details-spring.component';
import { TutorialsListSpringComponent } from './components/tutorials-list-spring/tutorials-list-spring.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'springtutorials', component: TutorialsListSpringComponent },
  { path: 'springtutorials/:id', component: TutorialDetailsSpringComponent },
  { path: 'springadd', component: AddTutorialSpringComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
