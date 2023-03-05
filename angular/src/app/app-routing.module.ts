import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GroupListComponent} from "./components/group/group-list/group-list.component";
import {GroupFormComponent} from "./components/group/group-form/group-form.component";
import {GroupResolver} from "./services/group.resolver";

const routes: Routes = [
  { path: 'groups', component: GroupListComponent },
  { path: 'groups/new', component: GroupFormComponent },
  { path: 'groups/:id', component: GroupFormComponent, resolve: {'groupResolver': GroupResolver} },
  { path: '**', redirectTo: 'groups' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [GroupResolver],
})
export class AppRoutingModule {

}
