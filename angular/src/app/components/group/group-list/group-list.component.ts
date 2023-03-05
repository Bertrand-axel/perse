import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {GroupsService} from "../../../services/groups.service";
import {Group} from "../../../models/group.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTable} from "@angular/material/table";
import {GroupListDatasource} from "./group-list-datasource";

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Group>;
  dataSource: GroupListDatasource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'origin', 'actions'];

  constructor(private groupsService: GroupsService) {
    this.dataSource = new GroupListDatasource(this.groupsService);
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.loadData();
  }

  delete(group: Group) {
    console.log('delete');
    if (group.id === null) {
      return;
    }
    this.groupsService.delete(group.id).subscribe(() => this.dataSource.loadData());
  }
}
