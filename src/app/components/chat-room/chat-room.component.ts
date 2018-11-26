import { Component, OnInit } from '@angular/core';
import { Message } from '../../message-models';
import { MessageList } from 'src/app/message-list';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  
  messages = MessageList;


  constructor() {
    
  }
  ngOnInit() { }




}
