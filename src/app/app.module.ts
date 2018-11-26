import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatFormComponent } from './components/chat-form/chat-form.component';
import { StartComponent } from './components/start/start.component';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';
import { MessageComponent } from './components/message/message.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserListComponent,
    ChatFormComponent,
    StartComponent,
    ChatRoomComponent,
    MessageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
