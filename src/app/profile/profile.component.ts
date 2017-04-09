import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { MemberService } from './../member.service';
import { ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MemberService]
})
export class ProfileComponent implements OnInit {
memberToDisplay: Member;
memberId: string;
password: string;
formShow = false;
  constructor(private location: Location, private activatedRoute: ActivatedRoute, private memberService: MemberService, private router:Router) { }

  ngOnInit() {
    this.password = this.memberService.retrieveSignIn();

    this.activatedRoute.params.forEach((urlParameters)=>{
      this.memberId = urlParameters['id'];
    });
    this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver=>{
      this.memberToDisplay= dataLastEmittedFromObserver;
      // this.memberToDisplay= new Member(dataLastEmittedFromObserver.name,dataLastEmittedFromObserver.email,dataLastEmittedFromObserver.role);
      // console.log(this.memberToDisplay);
    });
  }
  ngOnCheck(){
  }

  toggleButton(){
    this.formShow =  !this.formShow;
  }
  updateMember(thisMember){
    this.memberService.updateDataMember(thisMember);
  }

}
