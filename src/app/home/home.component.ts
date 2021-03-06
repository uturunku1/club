import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { MemberService } from './../member.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MemberService]
})
export class HomeComponent implements OnInit {

  members: FirebaseListObservable<any[]>;
  memberId;
  roleSelected= "all";
  currentRoute:string = this.router.url;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members= this.memberService.getMembers();
  }
  checkProfile(member){
    this.router.navigate(['profiles', member.$key]);
  }
  selectByRole(roleSelected){
    this.roleSelected = roleSelected;
  }
  deleteMember(thisMember){
    this.memberService.deleteInFirebase(thisMember.$key);
  }
  editMember(thisMember){
    this.router.navigate(['profiles', thisMember.$key]);
  }

}
