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
  wrongPassword = false;
  role:string;
  password: string;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }
  ngDoCheck(){
    this.password = this.memberService.retrieveSignIn();
  }
  // signIn(password){
  //   if(password==="admin"){
  //     this.rightPassword= true;
  //   } else if(password!= "admin"){
  //     this.wrongPassword= true;
  //   }
  // }
  signIn(inputPassword){
    inputPassword = inputPassword.trim();
    if(inputPassword==="admin"){
      this.memberService.saveSignIn(inputPassword);
    } else if(inputPassword!= "admin"){
      this.wrongPassword= true;
    }
  }
  signOut(){
    this.memberService.signOut();
  }

  selectNewRole(selectedRole){
    this.role = selectedRole;
  }
  submitMember(name: string, email: string ){
    let newMember= new Member(name, email, this.role);
    this.memberService.addMember(newMember);
  }


}
