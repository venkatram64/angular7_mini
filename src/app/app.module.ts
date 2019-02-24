import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatListModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { AssignmentDetailsComponent } from './assignment/assignment-details/assignment-details.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentService } from './shared/assignment.service';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    SubmittedDirective,
    AssignmentDetailsComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
    BrowserAnimationsModule
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
