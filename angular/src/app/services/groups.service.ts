import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Group} from "../models/group.model";
import {map} from "rxjs/operators";
import {Pageable} from "../models/pageable.model";

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  private baseURL = `http://perse.localhost/api`; // @todo in env file

  constructor(private http: HttpClient) {}

  getAll(): Observable<Group[]> {
    return this.http.get<Pageable<Group>>(`${this.baseURL}/groups`).pipe(map(response => response['hydra:member']));
  }

  get(id: number): Observable<Group> {
    return this.http.get<Group>(`${this.baseURL}/groups/${id}`);
  }

  create(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.baseURL}/groups`, group);
  }

  update(id: number, group: Group): Observable<Group> {
    return this.http.put<Group>(`${this.baseURL}/groups/${id}`, group);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/groups/${id}`);
  }
}
