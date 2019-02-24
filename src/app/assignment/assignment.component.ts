import { Component, OnInit } from '@angular/core';
import {Assignment} from './assignment.model';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  title = 'My Assignments Application';
  enabled = false;
  formVisible = false;

  selectedAssignment: Assignment;
  assignments: Assignment[];

  constructor(private assignmentService: AssignmentService) { }

  ngOnInit() {
    /*setTimeout(() =>{
      this.enabled = true;
    },2000)*/
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }

  getAssignments(){
    this.assignmentService.getAssignments().
      subscribe(assignments =>{
        this.assignments = assignments;
      })
  }
  setSelected(assignment: Assignment){
    this.selectedAssignment = assignment;
  }

  
  onAddBtnClick(){
    this.formVisible = true;  
    this.selectedAssignment = null;
  }

  onNewAssignment(event: Assignment){
    this.assignmentService.addAssignment(event).
      subscribe(success => {
        console.log(success);
      });
    this.formVisible = false;
  }
}
