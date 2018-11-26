import { Component, OnInit, Input } from '@angular/core';
import { MessageList } from 'src/app/message-list';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss']
})
export class ChatFormComponent implements OnInit {

  input = document.getElementById('msg');
  user = 1;

  constructor() { }

  ngOnInit() {
    
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
}
