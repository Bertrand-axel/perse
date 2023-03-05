import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {GroupsService} from "../../../services/groups.service";
import {Group} from "../../../models/group.model";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent {
  form: FormGroup;
  group: Group|null = null;

  constructor(private fb: FormBuilder, private groupeService: GroupsService) {
    this.form = new FormGroup({
      name: new FormControl(null),
      origin: new FormControl(null),
      town: new FormControl(null),
      startingYear: new FormControl(null),
      separationYear: new FormControl(null),
      founder: new FormControl(null),
      members: new FormControl(null),
      musicalCurrent: new FormControl(null),
      presentation: new FormControl(null),
    });
  }

  save(): void {
    const data = this.form.value;
    if (this.group) {
      data.id = this.group.id;
    }
    this.groupeService.create(data).subscribe(group => this.group = group);
  }
}
