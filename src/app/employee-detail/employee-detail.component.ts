import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { IEmployee } from "../employee";

@Component({
  selector: "app-employee-detail",
  templateUrl: "./employee-detail.component.html",
  styleUrls: ["./employee-detail.component.css"]
})
export class EmployeeDetailComponent implements OnInit {
  employees = [];
  errorMsg: string;

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(
      data => (this.employees = data),
      error => (this.errorMsg = error)
    );
  }
}
