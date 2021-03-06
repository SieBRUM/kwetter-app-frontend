import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { IKweet } from '../models/kweet.model';

@Component({
  selector: 'app-time-line-page',
  templateUrl: './app-time-line-page.component.html',
  styleUrls: ['./app-time-line-page.component.scss']
})
export class AppTimeLinePageComponent {

  kweets: Array<IKweet> = [
    {
      id: 1,
      date: new Date(),
      userImageBase64: '',
      userName: '<IMG SRC=j&#X41vascript:alert("test2")>',
      userHandle: '@siebren',
      hasLiked: true,
      amountReplies: 10,
      amountHeart: 100,
      content: '<script>alert(1)</script>!'
    },
    {
      id: 2,
      date: new Date(),
      userImageBase64: '',
      userName: 'Jan jansen',
      userHandle: '@janjansen69',
      hasLiked: true,
      amountReplies: 0,
      amountHeart: 5,
      content: 'djslkjdl sadjsak jdlkasjdlksaj dlajsdkljaslk djaskldj  aslkaslkdjaskljd aksldjkslajdl;kasjdlkasjdkl;asj lkdjalskd aslkdjlkasdjlksajdlksajdklsa!'
    },
    {
      id: 3,
      date: new Date(),
      userImageBase64: '',
      userName: 'Sjaakie',
      userHandle: '@xD',
      hasLiked: false,
      amountReplies: 1,
      amountHeart: 0,
      content: 'Hello world!'
    },
    {
      id: 4,
      date: new Date(),
      userImageBase64: '',
      userName: 'Hey daar xD',
      userHandle: '@rofl',
      hasLiked: false,
      amountReplies: 10,
      amountHeart: 100,
      content: 'Hello world!'
    }
  ];

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getTimeline().subscribe();
  }
}
