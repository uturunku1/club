import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {
  rightPassword = false;
  wrongPassword = false;
  role:string;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  signIn(password){
    if(password==="admin"){
      this.rightPassword= true;
    } else if(password!= "admin"){
      this.wrongPassword= true;
    }
  }
  selectNewRole(selectedRole){
    this.role = selectedRole;
  }
  submitMember(name: string, email: string ){
    let newMember= new Member(name, email, this.role);
    this.memberService.addMember(newMember);
  }


}
