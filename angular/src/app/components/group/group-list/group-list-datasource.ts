import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import {Observable, of as observableOf, merge, BehaviorSubject} from 'rxjs';
import {GroupsService} from "../../../services/groups.service";
import {Group} from "../../../models/group.model";


/**
 * Data source for the Group view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class GroupListDatasource extends DataSource<Group> {
  data = new BehaviorSubject<Group[]>([]);

  constructor(private groupsService: GroupsService) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Group[]> {
    return this.data.asObservable();
  }

  loadData(): void {
    this.groupsService.getAll().subscribe(data => this.data.next(data))
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}
}
