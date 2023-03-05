import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Group} from "../models/group.model";
import {GroupsService} from "./groups.service";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class GroupResolver implements Resolve<Group> {
  constructor(private groupsService: GroupsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Group> | Promise<Group> | Group {
    const id = route.paramMap.get('id') ?? 0; // @todo redirect if no param
    return this.groupsService.get(+id);
  }
}
