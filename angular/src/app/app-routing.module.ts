import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupListComponent} from "./components/group/group-list/group-list.component";
import {GroupFormComponent} from "./components/group/group-form/group-form.component";

const routes: Routes = [
  {
    path: 'groups',
    component: GroupListComponent,
    // children: [
    //   {
    //     path: 'new',
    //     component: GroupFormComponent,
    //   },
    //   {
    //     path: ':id',
    //     component: GroupDetailsComponent,
    //     children: [
    //       {
    //         path: 'edit',
    //         component: GroupFormComponent,
    //       }
    //     ]
    //   }
    // ]
  },
  { path: 'groups/new', component: GroupFormComponent},
  { path: 'groups/:id', component: GroupFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
