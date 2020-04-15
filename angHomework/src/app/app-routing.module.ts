import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AngBasicComponent } from './angBasic/angBasic.component';
import { AngSecondComponent } from './ang-second/ang-second.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes =[
  {path: 'angBasic', component: AngBasicComponent},
  {path: 'ang-second', component: AngSecondComponent},
  {path: 'people-list', component: PeopleListComponent},
  {path: 'form', component: UserFormComponent}

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
