import { Component, OnInit } from '@angular/core';
import { MessageList } from 'src/app/message-list';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  
  messages = MessageList;
  user = 5;

  constructor() {
    
  }
  ngOnInit() { 

  }




}
