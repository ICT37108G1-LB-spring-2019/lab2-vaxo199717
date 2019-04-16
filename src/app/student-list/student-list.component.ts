import { Component, OnInit } from "@angular/core";
import { IStudent } from "../models/student";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  students: IStudent[];
  tableHeader: string[];

  constructor() {
    this.students = [
      {
        firstName: "Nicole",
        lastName: "Anisston",
        perNO: "123456789"
      },
      {
        firstName: "John",
        lastName: "Snow",
        perNO: "6712351951"
      },
      {
        firstName: "Steve",
        lastName: "Jobs",
        perNO: "987654321"
      }
    ];

    this.tableHeader = Object.keys(this.students[0]);
  }

  ngOnInit() {}
}
