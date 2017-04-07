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
memberToDisplay;
memberId: string;

  constructor(private location: Location, private activatedRoute: ActivatedRoute, private memberService: MemberService, private router:Router) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((urlParameters)=>{
      this.memberId = urlParameters['id'];
    });
    this.memberToDisplay= this.memberService.getMemberById(this.memberId);
  }

}
