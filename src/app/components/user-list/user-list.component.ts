import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() childUser: number;

  constructor() { }

  ngOnInit() {
  }

  

  selectUser1() {
    this.childUser = 1;
    console.log(this.childUser)
  }
  selectUser2() {
    this.childUser = 2;
    console.log(this.childUser)
  }

}
