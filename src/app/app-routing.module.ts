import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { JobsComponent } from './jobs/jobs.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [{ path: 'jobs', component: JobsComponent },
{ path: 'new', component: NewComponent},{ path: 'details', component: DetailsComponent},  { path: '**', component: JobsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
