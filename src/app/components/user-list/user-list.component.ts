import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() childUser: number;
  @Output() user: number; 

  constructor() { }

  ngOnInit() {
  }

  

  selectUser1() {
    this.childUser = 1;
    this.user = 1;
    console.log(this.user)
  }
  selectUser2() {
    this.childUser = 2;
    this.user = 2;
    console.log(this.user)
  }

}
