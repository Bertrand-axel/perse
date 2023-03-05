import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {GroupsService} from "../../../services/groups.service";
import {Group} from "../../../models/group.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent {
  form: FormGroup;
  group: Group|null = null;

  constructor(
    private fb: FormBuilder,
    private groupeService: GroupsService,
    private activatedRoute: ActivatedRoute
  ) {
    console.log(this.activatedRoute.snapshot);
    this.group = this.activatedRoute.snapshot.data['groupResolver'] as Group ?? null;
    this.form = new FormGroup({
      name: new FormControl(this.group?.name),
      origin: new FormControl(this.group?.origin),
      town: new FormControl(this.group?.town),
      startingYear: new FormControl(this.group?.startingYear),
      separationYear: new FormControl(this.group?.separationYear),
      founder: new FormControl(this.group?.founder),
      members: new FormControl(this.group?.members),
      musicalCurrent: new FormControl(this.group?.musicalCurrent),
      presentation: new FormControl(this.group?.presentation),
    });
  }

  save(): void {
    const data = this.form.value;
    if (this.group?.id) {
      this.groupeService.update(this.group.id, data).subscribe(group => this.group = group);
    } else {
      this.groupeService.create(data).subscribe(group => this.group = group);
    }
  }
}
