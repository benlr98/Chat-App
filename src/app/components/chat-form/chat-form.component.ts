import { Component, OnInit, Input } from '@angular/core';
import { MessageList } from 'src/app/message-list';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  input = document.getElementById('msg');
  user: number;

  constructor() { }

  ngOnInit() {
    this.user = 1;
  }


  addMessage() {
    const inputText = (<HTMLInputElement>document.getElementById('msg')).value;
    MessageList.push({user: this.user, message: inputText});
    (<HTMLInputElement>document.getElementById('msg')).value = '';
  }

  handleSubmit(event) {
    if (event.keyCode === 13) {
      this.addMessage();
    }
    console.log()
  }  

  selectUser1() {
    this.user = 1;
    console.log(this.user)
  }
  selectUser2() {
    this.user = 2;
    console.log(this.user)
  }
}
