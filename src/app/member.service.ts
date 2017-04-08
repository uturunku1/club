import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers(){
    return this.members;
  }
  getMemberById(id: string){
    return this.angularFire.database.object('members/'+ id);
  }
  addMember(newMember: Member){
    this.members.push(newMember);
  }
  deleteInFirebase(thisMemberId){
    let memberInFirebase = this.getMemberById(thisMemberId);
    memberInFirebase.remove();
  }
  updateDataMember(thisMember){
    let memberInFirebase = this.getMemberById(thisMember.$key);
    memberInFirebase.update({name:thisMember.name, email:thisMember.email,role:thisMember.role});
  }

}
