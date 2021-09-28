import { Component, OnInit } from '@angular/core';
import { MembersService } from './members.service';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  title = "List of Members"
  members
  allMembers
  fbtn = false
  mbtn = false
  abtn = true

  constructor(service: MembersService) { 
    let p = service.getMembers()
    this.allMembers = p
    this.members = p
  }


  femaleOnly() {
    this.fbtn = true
    this.mbtn = false
    this.abtn = false
    this.members = this.allMembers.filter(member => member.gender === 'Female')
  }

  maleOnly() {
    this.fbtn = false
    this.mbtn = true
    this.abtn = false
    this.members = this.allMembers.filter(member => member.gender === 'Male')
  }

  showAll() {
    this.fbtn = false
    this.mbtn = false
    this.abtn = true
    this.members = this.allMembers
  }

  ngOnInit(): void {
  }

}
