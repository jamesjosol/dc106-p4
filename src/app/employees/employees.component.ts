import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title = "List of Employees"
  employees
  allEmployees
  /** toogle buttons */
  fbtn = false
  mbtn = false
  abtn = true

  constructor(service: EmployeesService) { 
    let e = service.getEmployees()
    this.allEmployees = e
    this.employees = e
  }


  femaleOnly() {
    this.fbtn = true
    this.mbtn = false
    this.abtn = false
    this.employees = this.allEmployees.filter(employee => employee.gender === 'Female')
  }

  maleOnly() {
    this.fbtn = false
    this.mbtn = true
    this.abtn = false
    this.employees = this.allEmployees.filter(employee => employee.gender === 'Male')
  }

  showAll() {
    this.fbtn = false
    this.mbtn = false
    this.abtn = true
    this.employees = this.allEmployees
  }

  ngOnInit(): void {
  }

}
