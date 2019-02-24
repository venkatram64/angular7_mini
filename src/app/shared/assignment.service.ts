import { Injectable } from '@angular/core';
import {Assignment}  from './../assignment/assignment.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  assignments: Assignment[] = [
    {
      name: "Chemistry",
      dueDate: new Date('2019-03-01'),
      submitted: true
    },
    {
      name: "Physics",
      dueDate: new Date('2019-02-04'),
      submitted: false
    }
  ]
  constructor() { }

  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<string>{
    this.assignments.push(assignment);
    return of("assignment is added.");
  }

  updateAssignment(assignment: Assignment): Observable<string>{
    this.assignments.forEach((assignment, i) =>{
      if(assignment === assignment){
        this.assignments[i] = assignment;
      }
    });
    return of("updated the assignment!");
  }

  deleteAssignment(assignment: Assignment): Observable<string>{
    this.assignments.forEach((assignment, i) =>{
      if(assignment === assignment){
        this.assignments.splice(i, 1);
      }
    });
    return of("deleted the assignment!");
  }
}
