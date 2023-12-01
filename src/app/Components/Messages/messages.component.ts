import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, MessagesService } from '../../Services/messages.service';

@Component({
    selector: "app-message",
	imports: [CommonModule],
    standalone: true,
    templateUrl: "./messages.component.html",
    styleUrl: "./messages.component.css",

})

export class MessagesComponent {
    @Input()message!: Message;
  constructor(private messagesService: MessagesService) {}
}


